<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="OpenAuthProviders.ascx.cs" Inherits="Ext.Account.OpenAuthProviders" %>

<fieldset class="open-auth-providers">
    <legend>Войти, используя другую службу</legend>
    
    <asp:ListView runat="server" ID="providerDetails" ItemType="Microsoft.AspNet.Membership.OpenAuth.ProviderDetails"
        SelectMethod="GetProviderNames" ViewStateMode="Disabled">
        <ItemTemplate>
            <button type="submit" name="provider" value="<%#: Item.ProviderName %>"
                title="Войдите, используя <%#: Item.ProviderDisplayName %> свою учетную запись.">
                <%#: Item.ProviderDisplayName %>
            </button>
        </ItemTemplate>
    
        <EmptyDataTemplate>
            <div class="message-info">
                <p>Внешние службу проверки подлинности не настроены. См. в <a href="http://go.microsoft.com/fwlink/?LinkId=252803">этой статье</a> сведения о настройке входа через сторонние службы в этом приложении ASP.NET.</p>
            </div>
        </EmptyDataTemplate>
    </asp:ListView>
</fieldset>