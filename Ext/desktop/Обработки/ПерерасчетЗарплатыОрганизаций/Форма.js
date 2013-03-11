Ext.define('Обработки.ПерерасчетЗарплатыОрганизаций.Форма',
	{
	extend: 'Ext.window.Window',
	height: 342,width: 380,
	iconCls: 'bogus',
	title: 'Перерасчет зарплаты организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:83px;top:33px;width:289px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:317px;width:380px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:83px;width:364px;height:226px;',
			height: 226,width: 364,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Документ',
				},
				{
					text:'ПериодРегистрации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:380px;height:25px;',
			items:
			[
				{
					text:'ОтметитьПоРаботникам',
				},
				{
					text:'Действие',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'ВыполнитьПерерасчетТекущимПериодом',
				},
				{
					text:'ВыполнитьПерерасчет',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПометитьДокументы',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'ПометитьВсе',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ОбновитьСписок',
				},
				{
					text:'ОтметитьПоПодразделениям',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю',
				},
				{
					text:'НеПредлагатьДляПерерасчета',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекущийПериод',
			style: 'position:absolute;left:231px;top:58px;width:141px;height:19px;',
		},
	]
});