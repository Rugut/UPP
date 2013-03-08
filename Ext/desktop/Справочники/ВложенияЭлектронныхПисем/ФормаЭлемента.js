Ext.define('Справочники.ВложенияЭлектронныхПисем.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 136,width: 396,
	iconCls: 'bogus',
	title: 'Вложение электронного письма',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:92px;top:85px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайла',
			style: 'position:absolute;left:92px;top:60px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объект',
			style: 'position:absolute;left:92px;top:33px;width:296px;height:19px;',
		},
	]
});