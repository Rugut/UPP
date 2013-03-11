Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаВводаГрафа3',
	{
	extend: 'Ext.window.Window',
	height: 590,width: 399,
	iconCls: 'bogus',
	title: 'Графа 3. Лицо, отв. за фин. урегулирование (ввод реквизитов)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:565px;width:399px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрНаименование',
			style: 'position:absolute;left:126px;top:37px;width:265px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрУлицаНомерДома',
			style: 'position:absolute;left:126px;top:173px;width:265px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрСтранаНаименование',
			style: 'position:absolute;left:152px;top:101px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрИндекс',
			style: 'position:absolute;left:126px;top:77px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрОбласть',
			style: 'position:absolute;left:126px;top:125px;width:265px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрНаселенныйПункт',
			style: 'position:absolute;left:126px;top:149px;width:265px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрСтранаКод',
			style: 'position:absolute;left:126px;top:101px;width:23px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрРФ_ОГРН',
			style: 'position:absolute;left:126px;top:221px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрРФ_ИНН',
			style: 'position:absolute;left:126px;top:197px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрРФ_КПП',
			style: 'position:absolute;left:290px;top:197px;width:101px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:240px;width:387px;height:213px;',
			height: 213,width: 387,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПодНаименование',
			style: 'position:absolute;left:120px;top:10px;width:265px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПодУлицаНомерДома',
			style: 'position:absolute;left:120px;top:144px;width:265px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПодСтранаНаименование',
			style: 'position:absolute;left:146px;top:74px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПодИндекс',
			style: 'position:absolute;left:120px;top:50px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПодОбласть',
			style: 'position:absolute;left:120px;top:96px;width:265px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПодНаселенныйПункт',
			style: 'position:absolute;left:120px;top:120px;width:265px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПодСтранаКод',
			style: 'position:absolute;left:120px;top:74px;width:23px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПодРФ_ОГРН',
			style: 'position:absolute;left:120px;top:192px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПодРФ_ИНН',
			style: 'position:absolute;left:120px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПодРФ_КПП',
			style: 'position:absolute;left:284px;top:168px;width:101px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:453px;width:387px;height:106px;',
			height: 106,width: 387,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПасВидДок',
			style: 'position:absolute;left:120px;top:2px;width:23px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПасНаименование',
			style: 'position:absolute;left:146px;top:2px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПасНомерДок',
			style: 'position:absolute;left:120px;top:26px;width:265px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПасДатаДок',
			style: 'position:absolute;left:120px;top:50px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтвЛицоФинУрПасОрг',
			style: 'position:absolute;left:120px;top:74px;width:265px;height:30px;',
		},
					]
				},
			]
		},
	]
});