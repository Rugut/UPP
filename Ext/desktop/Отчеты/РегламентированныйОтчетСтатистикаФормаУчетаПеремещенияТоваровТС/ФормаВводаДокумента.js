Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаВводаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:370px;height:104px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Графа 10. Документы (ввод реквизитов)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:79px;width:370px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
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
			xtype: 'label',
			name: 'НадписьДокВыбор',
			text: 'Наименование документа',
			style: 'position:absolute;left:8px;top:5px;width:144px;height:19px;',
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
		{
			xtype: 'label',
			name: 'НадписьДокДата',
			text: 'Дата документа',
			style: 'position:absolute;left:8px;top:53px;width:144px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокНомер',
			text: 'Номер документа',
			style: 'position:absolute;left:8px;top:29px;width:144px;height:19px;',
		},
	]
});