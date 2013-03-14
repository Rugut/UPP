Ext.define('Обработки.МСФОКонсолидация.ФормаКонсолидацияДанных',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:656px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Консолидация по информационной базе',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:656px;height:25px;',
			items:
			[
				{
					text:'<< Назад',
				},
				'-',
				{
					text:'Далее >>',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:640px;height:326px;',
			height: 326,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период составления отчета:',
			style: 'position:absolute;left:0px;top:0px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:164px;top:0px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Консолидируемая группа:',
			style: 'position:absolute;left:0px;top:24px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазваниеКонсолидируемойГруппы',
			style: 'position:absolute;left:164px;top:24px;width:476px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:91px;width:640px;height:213px;',
			height: 213,width: 640,
			columns:
			[
				{
					text:'Организация',
					width:'220',
				},
				{
					text:'Головная орг.',
					width:'80',
				},
				{
					text:'Товары (на начало)',
					width:'100',
				},
				{
					text:'Товары (оборот)',
					width:'100',
				},
				{
					text:'Материалы (на начало)',
					width:'100',
				},
				{
					text:'Материалы (оборот)',
					width:'100',
				},
				{
					text:'НЗП (на начало)',
					width:'100',
				},
				{
					text:'НЗП (оборот)',
					width:'100',
				},
				{
					text:'Полуфабрикаты (на начало)',
					width:'100',
				},
				{
					text:'Полуфабрикаты (оборот)',
					width:'100',
				},
				{
					text:'ГП (на начало)',
					width:'100',
				},
				{
					text:'ГП (оборот)',
					width:'100',
				},
				{
					text:'Товары отгр. (на начало)',
					width:'100',
				},
				{
					text:'Товары отгр. (оборот)',
					width:'100',
				},
				{
					text:'ОС (на начало)',
					width:'100',
				},
				{
					text:'ОС (оборот)',
					width:'100',
				},
				{
					text:'НМА (на начало)',
					width:'100',
				},
				{
					text:'НМА (оборот)',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:67px;width:640px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Для каждой консолидируемой организации укажите прибыль от внутригрупповых операций в разрезе указанных активов.',
			style: 'position:absolute;left:0px;top:311px;width:640px;height:15px;',
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Операция:',
			style: 'position:absolute;left:0px;top:22px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Операция',
			style: 'position:absolute;left:70px;top:22px;width:570px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:46px;width:640px;height:280px;',
			height: 280,width: 640,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Счет Дт',
					width:'80',
				},
				{
					text:'Субконто Дт',
					width:'120',
				},
				{
					text:'',
					width:'120',
				},
				{
					text:'',
					width:'120',
				},
				{
					text:'Счет Кт',
					width:'80',
				},
				{
					text:'Субконто Кт',
					width:'120',
				},
				{
					text:'',
					width:'120',
				},
				{
					text:'',
					width:'120',
				},
				{
					text:'Сумма',
					width:'120',
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
			style: 'position:absolute;left:0px;top:21px;width:640px;height:305px;',
			height: 305,width: 640,
			columns:
			[
				{
					text:'Отчет',
					width:'300',
				},
				{
					text:'Ссылка',
					width:'21',
				},
			]
		},
					]
				},
			]
		},
	]
});