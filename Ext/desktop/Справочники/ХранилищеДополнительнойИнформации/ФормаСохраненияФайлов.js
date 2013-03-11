Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаСохраненияФайлов',
	{
	extend: 'Ext.window.Window',
	height: 104,width: 512,
	iconCls: 'bogus',
	title: 'Сохранить файлы',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяКаталога',
			style: 'position:absolute;left:76px;top:8px;width:428px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'ОК',
			style: 'position:absolute;left:316px;top:74px;width:92px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтмена',
			text: 'Отмена',
			style: 'position:absolute;left:412px;top:74px;width:92px;height:19px;',
		},
	]
});