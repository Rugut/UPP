Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаВводаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 104,width: 370,
	iconCls: 'bogus',
	title: 'Графа 10. Документы (ввод реквизитов)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:79px;width:370px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокВыбор',
			style: 'position:absolute;left:157px;top:5px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокДата',
			style: 'position:absolute;left:157px;top:53px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокНомер',
			style: 'position:absolute;left:157px;top:29px;width:205px;height:19px;',
		},
	]
});