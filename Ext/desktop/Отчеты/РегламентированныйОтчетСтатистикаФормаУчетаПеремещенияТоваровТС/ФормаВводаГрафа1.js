Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаВводаГрафа1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:395px;height:244px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Графа 1. Отправитель (ввод реквизитов)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:219px;width:395px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textarea',
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
			xtype: 'label',
			name: 'НадписьОтправительНаименование',
			text: 'Организация/ФИО физического лица:',
			style: 'position:absolute;left:8px;top:8px;width:106px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительУлицаНомерДома',
			text: 'Улица, номер дома:',
			style: 'position:absolute;left:8px;top:144px;width:106px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьОтправительСтранаНаименование',
			text: 'Страна:',
			style: 'position:absolute;left:8px;top:72px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительИндекс',
			text: 'Почтовый индекс:',
			style: 'position:absolute;left:8px;top:48px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительОбласть',
			text: 'Область:',
			style: 'position:absolute;left:8px;top:96px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительНаселенныйПункт',
			style: 'position:absolute;left:121px;top:120px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительНаселенныйПункт',
			text: 'Населенный пункт:',
			style: 'position:absolute;left:8px;top:120px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРФ_ОГРН',
			text: 'ОГРН/ОГРНИП:',
			style: 'position:absolute;left:8px;top:192px;width:106px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьОтправительРФ_ИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:8px;top:168px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРФ_КПП',
			text: 'КПП:',
			style: 'position:absolute;left:224px;top:168px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительРБ_УНП',
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРБ_УНП',
			text: 'УНП:',
			style: 'position:absolute;left:8px;top:168px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительРК_БИН',
			style: 'position:absolute;left:286px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРК_БИН',
			text: 'БИН:',
			style: 'position:absolute;left:224px;top:168px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительРК_ИИН',
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРК_ИИН',
			text: 'ИИН:',
			style: 'position:absolute;left:8px;top:168px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтправительСтранаКод',
			style: 'position:absolute;left:121px;top:72px;width:23px;height:19px;',
		},
	]
});