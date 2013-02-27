<%@ Page Title="О программе" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="About.aspx.cs" Inherits="Ext.About" %>

<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <hgroup class="title">
        <h1><%: Title %>.</h1>
        <h2>Страница описания приложения.</h2>
    </hgroup>

    <article>
        <p>        
            В этой области можно указать дополнительные сведения.
        </p>

        <p>        
            В этой области можно указать дополнительные сведения.
        </p>

        <p>        
            В этой области можно указать дополнительные сведения.
        </p>
    </article>

    <aside>
        <h3>Заголовок боковой панели</h3>
        <p>        
            В этой области можно указать дополнительные сведения.
        </p>
        <ul>
            <li><a runat="server" href="~/">Домашняя</a></li>
            <li><a runat="server" href="~/About.aspx">О программе</a></li>
            <li><a runat="server" href="~/Contact.aspx">Контакт</a></li>
        </ul>
    </aside>
</asp:Content>