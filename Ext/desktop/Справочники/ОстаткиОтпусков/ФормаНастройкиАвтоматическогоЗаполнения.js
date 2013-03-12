Ext.define('Справочники.ОстаткиОтпусков.ФормаНастройкиАвтоматическогоЗаполнения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:112px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заполнять остатки отпусков автоматически',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Пояснение',
			text: 'Программа будет автоматически заполнять остатки отпусков прошлого года для каждого сотрудника. Автоматическое заполнение будет происходить 1-ого января каждого года',
			style: 'position:absolute;left:8px;top:34px;width:384px;height:45px;',
		},
	]
});