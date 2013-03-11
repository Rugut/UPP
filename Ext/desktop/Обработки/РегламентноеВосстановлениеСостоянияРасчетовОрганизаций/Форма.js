Ext.define('Обработки.РегламентноеВосстановлениеСостоянияРасчетовОрганизаций.Форма',
	{
	extend: 'Ext.window.Window',
	height: 380,width: 625,
	iconCls: 'bogus',
	title: 'Восстановление состояния расчетов с контрагентами',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:625px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:355px;width:625px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаАктуализации',
			style: 'position:absolute;left:306px;top:33px;width:99px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:609px;height:177px;',
			height: 177,width: 609,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Организация',
				},
				{
					text:'ГраницаПриобретений',
				},
				{
					text:'ГраницаРеализаций',
				},
				{
					text:'ДатаНачалаПереоценки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:609px;height:24px;',
			items:
			[
				{
					text:'СнятьОтметку',
				},
				{
					text:'ОтметитьВсе',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});