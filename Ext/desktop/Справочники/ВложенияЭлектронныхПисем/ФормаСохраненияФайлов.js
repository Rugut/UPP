Ext.define('Справочники.ВложенияЭлектронныхПисем.ФормаСохраненияФайлов',
	{
	extend: 'Ext.window.Window',
	height: 100,width: 512,
	iconCls: 'bogus',
	title: 'Сохранить файлы',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяКаталога',
			style: 'position:absolute;left:76px;top:8px;width:428px;height:19px;',
		},
	]
});