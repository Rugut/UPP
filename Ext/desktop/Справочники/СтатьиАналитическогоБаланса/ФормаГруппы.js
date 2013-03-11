Ext.define('Справочники.СтатьиАналитическогоБаланса.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 60,width: 486,
	iconCls: 'bogus',
	title: 'Группа Статьи аналитического баланса',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:35px;width:486px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:8px;width:209px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодДляОтчета',
			style: 'position:absolute;left:397px;top:8px;width:81px;height:19px;',
		},
	]
});