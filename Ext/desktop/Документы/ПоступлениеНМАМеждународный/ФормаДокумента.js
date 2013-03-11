Ext.define('Документы.ПоступлениеНМАМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 376,width: 654,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:324px;width:559px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:83px;width:638px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьОС',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:107px;width:638px;height:211px;',
			height: 211,width: 638,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НематериальныйАктив',
				},
				{
					text:'УчитыватьКакНМА',
				},
				{
					text:'ДатаПринятияКУчету',
				},
				{
					text:'СчетУчета',
				},
				{
					text:'СрокПолезногоИспользования',
				},
				{
					text:'СчетСниженияСтоимости',
				},
				{
					text:'НачислятьАмортизацию',
				},
				{
					text:'МетодНачисленияАмортизации',
				},
				{
					text:'СчетНачисленияАмортизации',
				},
				{
					text:'СчетЗатрат',
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
				{
					text:'ПредполагаемыйОбъемПродукции',
				},
				{
					text:'КоэффициентУскорения',
				},
				{
					text:'СуммаНачисленнойАмортизации',
				},
				{
					text:'СчетУчетаНовый',
				},
				{
					text:'Субконто1Нов',
				},
				{
					text:'Субконто2Нов',
				},
				{
					text:'Субконто3Нов',
				},
				{
					text:'Сумма',
				},
				{
					text:'ПервоначальнаяСтоимость',
				},
				{
					text:'ЛиквидационнаяСтоимость',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:351px;width:654px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:426px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:533px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:625px;top:33px;width:19px;height:19px;',
		},
	]
});