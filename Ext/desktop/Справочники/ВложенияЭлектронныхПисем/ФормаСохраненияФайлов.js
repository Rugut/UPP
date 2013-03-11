Ext.define('Справочники.ВложенияЭлектронныхПисем.ФормаСохраненияФайлов',
	{
	extend: 'Ext.window.Window',
	height: 100,width: 512,
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:75px;width:512px;height:25px;',
			items:
			[
				{
					text:'КнопкаОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});