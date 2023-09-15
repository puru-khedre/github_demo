import { Form, Input, Modal } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

interface Props {
    shouldShowModal: boolean;
    onSubmit: (token: string) => void;
    onCancel: () => void;
}

const AuthModal: React.FC<Props> = ({
    shouldShowModal,
    onSubmit,
    onCancel,
}) => {
    const [form] = Form.useForm();

    const onFormSubmit = () => {
        form.validateFields().then((values) => {
            onSubmit(values.token);
        });
    };

    return (
        <Modal
            title="Provide GitHub Authentication Token"
            centered
            okText="Save"
            cancelText="Cancel"
            open={shouldShowModal}
            onOk={onFormSubmit}
            onCancel={onCancel}
        >
            <Form
                form={form}
                name="auth_form"
                initialValues={{
                    token: "",
                }}
            >
                <Form.Item
                    name="token"
                    label="Token"
                    rules={[
                        {
                            required: true,
                            message: "Please provide your GitHub Token!",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="GitHub Token"
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AuthModal;
