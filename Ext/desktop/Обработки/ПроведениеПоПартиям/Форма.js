Ext.define('Обработки.ПроведениеПоПартиям.Форма',
	{
	extend: 'Ext.window.Window',
	height: 377,width: 400,
	iconCls: 'bogus',
	title: 'Проведение по партиям',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:207px;top:33px;width:103px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Настройка',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'Настройка',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'НастройкаОбработки',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'РазделительВыбиратьДатыПериодом',
				},
				{
					text:'Действие',
				},
				{
					text:'НастройкаОбработки',
				},
				{
					text:'РазделительСправка',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'УстановкаГраницыПоследовательностиПартионногоУчета',
				},
				{
					text:'УстановкаГраницыПоследовательностиПартионногоУчета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:352px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:160px;width:384px;height:184px;',
			height: 184,width: 384,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Организация',
				},
				{
					text:'ГоловнаяОрганизация',
				},
				{
					text:'КолонкаЗаголовок',
				},
				{
					text:'УУ',
				},
				{
					text:'БУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:136px;width:384px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'ПодробнаяИнформация',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});