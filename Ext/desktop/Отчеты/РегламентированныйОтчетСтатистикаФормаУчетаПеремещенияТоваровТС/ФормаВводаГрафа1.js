Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаВводаГрафа1',
	{
	extend: 'Ext.window.Window',
	height: 244,width: 395,
	iconCls: 'bogus',
	title: 'Графа 1. Отправитель (ввод реквизитов)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:219px;width:395px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительНаименование',
			style: 'position:absolute;left:121px;top:8px;width:266px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительУлицаНомерДома',
			style: 'position:absolute;left:121px;top:144px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительСтранаНаименование',
			style: 'position:absolute;left:147px;top:72px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительИндекс',
			style: 'position:absolute;left:121px;top:48px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительОбласть',
			style: 'position:absolute;left:121px;top:96px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительРФ_ОГРН',
			style: 'position:absolute;left:121px;top:192px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительНаселенныйПункт',
			style: 'position:absolute;left:121px;top:120px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительРФ_ИНН',
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительРФ_КПП',
			style: 'position:absolute;left:286px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительРБ_УНП',
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительРК_БИН',
			style: 'position:absolute;left:286px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительРК_ИИН',
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительСтранаКод',
			style: 'position:absolute;left:121px;top:72px;width:23px;height:19px;',
		},
	]
});