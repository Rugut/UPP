Ext.define('Справочники.ОстаткиОтпусков.ФормаНастройкиАвтоматическогоЗаполнения',
	{
	extend: 'Ext.window.Window',
	height: 112,width: 400,
	iconCls: 'bogus',
	title: 'Настройка автоматического заполнения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:87px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
});