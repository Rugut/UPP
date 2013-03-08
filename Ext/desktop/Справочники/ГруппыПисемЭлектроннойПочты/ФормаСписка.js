Ext.define('Справочники.ГруппыПисемЭлектроннойПочты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 482,
	iconCls: 'bogus',
	title: 'Справочник Группы писем электронной почты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗапись',
			style: 'position:absolute;left:100px;top:33px;width:374px;height:19px;',
		},
	]
});