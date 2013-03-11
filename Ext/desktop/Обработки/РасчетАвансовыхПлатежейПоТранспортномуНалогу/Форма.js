Ext.define('Обработки.РасчетАвансовыхПлатежейПоТранспортномуНалогу.Форма',
	{
	extend: 'Ext.window.Window',
	height: 392,width: 787,
	iconCls: 'bogus',
	title: 'Обработка  Расчет авансовых платежей по транспортному налогу',
	
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
			style: 'position:absolute;left:8px;top:63px;width:771px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:87px;width:771px;height:177px;',
			height: 177,width: 771,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'КодВида',
				},
				{
					text:'ИдентификационныйНомер',
				},
				{
					text:'Марка',
				},
				{
					text:'РегистрационныйЗнак',
				},
				{
					text:'НалоговаяБаза',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'СрокИспользования',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'СтавкаНалога',
				},
				{
					text:'СуммаНалога',
				},
				{
					text:'КодНалоговйЛьготы',
				},
				{
					text:'СуммаНалоговойЛьготы',
				},
				{
					text:'СуммаНалогаКуплате',
				},
				{
					text:'КодОКАТО',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:274px;width:771px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:298px;width:771px;height:61px;',
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
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'РегистрацияТранспортныхСредств',
				},
				{
					text:'ОсновныеДействияФормыЗаполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:787px;height:25px;',
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
	]
});