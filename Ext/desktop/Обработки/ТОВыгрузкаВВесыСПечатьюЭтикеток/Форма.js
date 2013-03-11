Ext.define('Обработки.ТОВыгрузкаВВесыСПечатьюЭтикеток.Форма',
	{
	extend: 'Ext.window.Window',
	height: 400,width: 700,
	iconCls: 'bogus',
	title: 'Выгрузка данных в весы с печатью этикеток',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действия',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ВыгрузитьВВесы',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:52px;width:684px;height:21px;',
			height: 21,width: 684,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:391px;top:1px;width:293px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:97px;width:684px;height:108px;',
			height: 108,width: 684,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:39px;width:684px;height:69px;',
			height: 69,width: 684,
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
			style: 'position:absolute;left:0px;top:15px;width:684px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:211px;width:684px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ВыделитьВсе',
				},
				{
					text:'ОчиститьВыделение',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:235px;width:684px;height:158px;',
			height: 158,width: 684,
			columns:
			[
				{
					text:'Выгружать',
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'КодТовара',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'Качество',
				},
				{
					text:'Цена',
				},
			]
		},
	]
});