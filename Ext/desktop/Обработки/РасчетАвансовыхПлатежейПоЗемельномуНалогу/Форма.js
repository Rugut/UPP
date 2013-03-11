Ext.define('Обработки.РасчетАвансовыхПлатежейПоЗемельномуНалогу.Форма',
	{
	extend: 'Ext.window.Window',
	height: 402,width: 787,
	iconCls: 'bogus',
	title: 'Обработка  Расчет авансовых платежей по земельному налогу',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:33px;width:308px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:284px;width:771px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:308px;width:771px;height:61px;',
			height: 61,width: 771,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'КодОКАТО',
				},
				{
					text:'Сумма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:787px;height:25px;',
			items:
			[
				{
					text:'РегистрацияЗемельныхУчастков',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗаполнить',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:377px;width:787px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Печать',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:445px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:576px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:85px;width:771px;height:189px;',
			height: 189,width: 771,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'КодКатегорииЗемель',
				},
				{
					text:'КадастровыйНомер',
				},
				{
					text:'КадастроваяСтоимость',
				},
				{
					text:'ДоляВПравеОбщейСобственностиЧислитель',
				},
				{
					text:'ДоляВПравеОбщейСобственностиЗнаменатель',
				},
				{
					text:'НалоговаяСтавка',
				},
				{
					text:'НалоговаяБаза',
				},
				{
					text:'СуммаНалога',
				},
				{
					text:'НалоговаяЛьгота',
				},
				{
					text:'КоличествоМесяцевВладения',
				},
				{
					text:'КоличествоМесяцевПримененияЛьготы',
				},
				{
					text:'СуммаНалогаКуплате',
				},
				{
					text:'КодПоОКАТО',
				},
				{
					text:'ПериодСтроительства',
				},
				{
					text:'КБК',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:61px;width:771px;height:24px;',
			items:
			[
			]
		},
	]
});