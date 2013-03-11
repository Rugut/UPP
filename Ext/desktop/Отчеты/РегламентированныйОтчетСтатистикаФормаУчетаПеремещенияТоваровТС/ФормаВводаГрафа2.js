Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаВводаГрафа2',
	{
	extend: 'Ext.window.Window',
	height: 244,width: 395,
	iconCls: 'bogus',
	title: 'Графа 2. Получатель (ввод реквизитов)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:219px;width:395px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательНаименование',
			style: 'position:absolute;left:121px;top:8px;width:266px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательУлицаНомерДома',
			style: 'position:absolute;left:121px;top:144px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательСтранаНаименование',
			style: 'position:absolute;left:147px;top:72px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательИндекс',
			style: 'position:absolute;left:121px;top:48px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательОбласть',
			style: 'position:absolute;left:121px;top:96px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательРФ_ОГРН',
			style: 'position:absolute;left:121px;top:192px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательНаселенныйПункт',
			style: 'position:absolute;left:121px;top:120px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательРФ_ИНН',
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательРФ_КПП',
			style: 'position:absolute;left:286px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательРБ_УНП',
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательРК_БИН',
			style: 'position:absolute;left:286px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательРК_ИИН',
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолучательСтранаКод',
			style: 'position:absolute;left:121px;top:72px;width:23px;height:19px;',
		},
	]
});