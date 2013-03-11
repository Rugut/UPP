Ext.define('Документы.ПереводОсновныхСредствИИнвестиционнойСобственностиМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 376,width: 725,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:67px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:218px;top:33px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:466px;top:33px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:324px;width:630px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:466px;top:57px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:67px;top:58px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:218px;top:57px;width:132px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:83px;width:709px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьОС',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:107px;width:709px;height:211px;',
			height: 211,width: 709,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'НаправлениеПереводаОСиИС',
				},
				{
					text:'МестонахождениеОбъекта',
				},
				{
					text:'МОЛ',
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
					text:'ЛиквидационнаяСтоимость',
				},
				{
					text:'КоэффициентУскорения',
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
					text:'СуммаНачисленнойАмортизации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:725px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:351px;width:725px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
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
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:354px;top:57px;width:20px;height:19px;',
		},
	]
});