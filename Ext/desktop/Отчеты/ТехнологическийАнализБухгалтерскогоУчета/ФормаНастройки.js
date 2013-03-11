Ext.define('Отчеты.ТехнологическийАнализБухгалтерскогоУчета.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 293,width: 679,
	iconCls: 'bogus',
	title: 'Параметры анализа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:268px;width:679px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
				{
					text:'Действие',
				},
				{
					text:'КнопкаВыбратьНажатие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:10px;top:8px;width:663px;height:252px;',
			height: 252,width: 663,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:618px;height:220px;',
			height: 220,width: 618,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'Настройка',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаУстановитьВсе',
			text: '',
			style: 'position:absolute;left:631px;top:6px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСнятьВсе',
			text: '',
			style: 'position:absolute;left:631px;top:35px;width:24px;height:24px;',
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:426px;height:25px;',
			items:
			[
				{
					text:'Восстановить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:36px;width:649px;height:190px;',
			height: 190,width: 649,
			columns:
			[
				{
					text:'Дт',
				},
				{
					text:'Кт',
				},
				{
					text:'ДтИскл',
				},
				{
					text:'КтИскл',
				},
				{
					text:'Инструкция',
				},
			]
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:649px;height:220px;',
			height: 220,width: 649,
			columns:
			[
				{
					text:'ИмяСчетаНУ',
				},
				{
					text:'КодСчетаБУ',
				},
				{
					text:'Валютный',
				},
				{
					text:'Количественный',
				},
				{
					text:'ТипСчета',
				},
				{
					text:'Субконто1',
				},
				{
					text:'Субконто2',
				},
				{
					text:'Субконто3',
				},
			]
		},
					]
				},
			]
		},
	]
});