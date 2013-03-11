Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаП1.ФормаВыбораПриложения3',
	{
	extend: 'Ext.window.Window',
	height: 164,width: 657,
	iconCls: 'bogus',
	title: 'Выберите сохраненную форму ""П-1 Приложение 3"" для выгрузки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Открыть',
				},
				{
					text:'Выбрать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:641px;height:125px;',
			height: 125,width: 641,
			columns:
			[
				{
					text:'ПредставлениеФормы',
				},
				{
					text:'Периодичность',
				},
				{
					text:'Комментарий',
				},
				{
					text:'Период',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'ТекДок',
				},
			]
		},
	]
});