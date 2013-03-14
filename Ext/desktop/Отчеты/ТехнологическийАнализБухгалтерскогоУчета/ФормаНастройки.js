Ext.define('Отчеты.ТехнологическийАнализБухгалтерскогоУчета.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:679px;height:293px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры анализа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:268px;width:679px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Действие1',
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
					title:'Настройки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:618px;height:220px;',
			height: 220,width: 618,
			columns:
			[
				{
					text:'Название анализа/операции',
					width:'280',
				},
				{
					text:'Выполнять',
					width:'68',
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
					title:'Недопустимые проводки',
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
					width:'100',
				},
				{
					text:'Кт',
					width:'100',
				},
				{
					text:'ДтИсключение',
					width:'100',
				},
				{
					text:'КтИсключение',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Эталонный ПС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:649px;height:220px;',
			height: 220,width: 649,
			columns:
			[
				{
					text:'Наименование счета',
					width:'100',
				},
				{
					text:'Код',
					width:'100',
				},
				{
					text:'Валютный',
					width:'100',
				},
				{
					text:'Количественный',
					width:'100',
				},
				{
					text:'Вид счета',
					width:'100',
				},
				{
					text:'Субконто1',
					width:'100',
				},
				{
					text:'Субконто2',
					width:'100',
				},
				{
					text:'Субконто3',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
	]
});