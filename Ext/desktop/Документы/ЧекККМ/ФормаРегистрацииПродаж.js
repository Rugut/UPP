﻿Ext.define('Документы.ЧекККМ.ФормаРегистрацииПродаж',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:782px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Чек ККМ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'СуммаДокумента',
			text: '1000000.00',
			style: 'position:absolute;left:458px;top:354px;width:311px;height:57px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекущийПользователь',
			text: '',
			style: 'position:absolute;left:267px;top:5px;width:507px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'ДисконтнаяКарта',
			text: '',
			style: 'position:absolute;left:160px;top:349px;width:129px;height:18px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:782px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтог',
			text: 'Итого:',
			style: 'position:absolute;left:300px;top:354px;width:152px;height:57px;',
		},
		{
			xtype: 'label',
			name: 'Скидки',
			text: 'Скидки:',
			style: 'position:absolute;left:13px;top:395px;width:70px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:5px;width:766px;height:336px;',
			height: 336,width: 766,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:15px;width:766px;height:252px;',
			height: 252,width: 766,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Код',
					width:'66',
				},
				{
					text:'Артикул',
					width:'110',
				},
				{
					text:'Штрихкод',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'299',
				},
				{
					text:'Количество',
					width:'72',
				},
				{
					text:'Ед. изм.',
					width:'66',
				},
				{
					text:'Цена',
					width:'85',
				},
				{
					text:'Сумма без скидок',
					width:'94',
				},
				{
					text:'% Руч.ск.',
					width:'60',
				},
				{
					text:'% Авт.ск.',
					width:'55',
				},
				{
					text:'Сумма',
					width:'102',
				},
				{
					text:'Характеристика номенклатуры',
					width:'122',
				},
				{
					text:'Серия номенклатуры',
					width:'123',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'СкидкиИтогоСумма',
			text: '',
			style: 'position:absolute;left:175px;top:395px;width:114px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьДисконтнаяКарта',
			text: 'Дисконтная карта:',
			style: 'position:absolute;left:13px;top:349px;width:142px;height:18px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВладелецДисконтнойКарты',
			text: 'Владелец дисконтной карты',
			style: 'position:absolute;left:13px;top:371px;width:276px;height:18px;',
		},
	]
});