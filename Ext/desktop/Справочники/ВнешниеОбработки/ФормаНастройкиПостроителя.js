Ext.define('Справочники.ВнешниеОбработки.ФормаНастройкиПостроителя',
	{
	extend: 'Ext.window.Window',
	height: 267,width: 400,
	iconCls: 'bogus',
	title: 'Настройка условий',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:242px;width:400px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:384px;height:202px;',
			height: 202,width: 384,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:24px;',
			items:
			[
			]
		},
	]
});