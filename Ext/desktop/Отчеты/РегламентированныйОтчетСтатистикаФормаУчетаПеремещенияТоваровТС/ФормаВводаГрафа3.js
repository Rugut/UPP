Ext.require(['Данные.Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаВводаГрафа3',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:399px;height:590px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Графа 3. Лицо, отв. за фин. урегулирование (ввод реквизитов)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:565px;width:399px;height:25px;',
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
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрНаименование',
			style: 'position:absolute;left:126px;top:37px;width:265px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрУлицаНомерДома',
			width: 265,
			height: 19,
			style: 'position:absolute;left:126px;top:173px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрНаименование',
			text: 'Организация/ФИО физического лица:',
			style: 'position:absolute;left:8px;top:37px;width:112px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрУлицаНомерДома',
			text: 'Улица, номер дома:',
			style: 'position:absolute;left:8px;top:173px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ОтвЛицоФинУрСтранаНаименование',
			width: 239,
			height: 19,
			style: 'position:absolute;left:152px;top:101px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрИндекс',
			width: 101,
			height: 19,
			style: 'position:absolute;left:126px;top:77px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрОбласть',
			width: 265,
			height: 19,
			style: 'position:absolute;left:126px;top:125px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрСтранаНаименование',
			text: 'Страна:',
			style: 'position:absolute;left:8px;top:101px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрИндекс',
			text: 'Почтовый индекс:',
			style: 'position:absolute;left:8px;top:77px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрОбласть',
			text: 'Область:',
			style: 'position:absolute;left:8px;top:125px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрНаселенныйПункт',
			width: 265,
			height: 19,
			style: 'position:absolute;left:126px;top:149px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрНаселенныйПункт',
			text: 'Населенный пункт:',
			style: 'position:absolute;left:8px;top:149px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ОтвЛицоФинУрСтранаКод',
			width: 23,
			height: 19,
			style: 'position:absolute;left:126px;top:101px;width:23px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрРФ_ОГРН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:126px;top:221px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрРФ_ОГРН',
			text: 'ОГРН/ОГРНИП:',
			style: 'position:absolute;left:8px;top:221px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрРФ_ИНН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:126px;top:197px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрРФ_КПП',
			width: 101,
			height: 19,
			style: 'position:absolute;left:290px;top:197px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрРФ_ИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:8px;top:197px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрРФ_КПП',
			text: 'КПП:',
			style: 'position:absolute;left:229px;top:197px;width:55px;height:19px;text-align:center;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:240px;width:387px;height:213px;',
			height: 213,width: 387,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПодНаименование',
			style: 'position:absolute;left:120px;top:10px;width:265px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПодУлицаНомерДома',
			width: 265,
			height: 19,
			style: 'position:absolute;left:120px;top:144px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрПодНаименование',
			text: 'Название обособл. подразделения:',
			style: 'position:absolute;left:2px;top:10px;width:112px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ОтвЛицоФинУрПодСтранаНаименование',
			width: 239,
			height: 19,
			style: 'position:absolute;left:146px;top:74px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПодИндекс',
			width: 101,
			height: 19,
			style: 'position:absolute;left:120px;top:50px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПодОбласть',
			width: 265,
			height: 19,
			style: 'position:absolute;left:120px;top:96px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрПодИндекс',
			text: 'Почтовый индекс:',
			style: 'position:absolute;left:2px;top:50px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПодНаселенныйПункт',
			width: 265,
			height: 19,
			style: 'position:absolute;left:120px;top:120px;width:265px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ОтвЛицоФинУрПодСтранаКод',
			width: 23,
			height: 19,
			style: 'position:absolute;left:120px;top:74px;width:23px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПодРФ_ОГРН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:120px;top:192px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПодРФ_ИНН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:120px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПодРФ_КПП',
			width: 101,
			height: 19,
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ОтвЛицоФинУрПасВидДок',
			width: 23,
			height: 19,
			style: 'position:absolute;left:120px;top:2px;width:23px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрПасВидДок',
			text: 'Док., удост. личн.:',
			style: 'position:absolute;left:2px;top:2px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПасНаименование',
			width: 239,
			height: 19,
			style: 'position:absolute;left:146px;top:2px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПасНомерДок',
			width: 265,
			height: 19,
			style: 'position:absolute;left:120px;top:26px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрПасНомерДок',
			text: 'Номер документа:',
			style: 'position:absolute;left:2px;top:26px;width:112px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОтвЛицоФинУрПасДатаДок',
			width: 85,
			height: 19,
			style: 'position:absolute;left:120px;top:50px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрПасДатаДок',
			text: 'Дата выдачи:',
			style: 'position:absolute;left:2px;top:50px;width:112px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ОтвЛицоФинУрПасОрг',
			style: 'position:absolute;left:120px;top:74px;width:265px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУрПасОрг',
			text: 'Организация, выдавшая докум.:',
			style: 'position:absolute;left:2px;top:74px;width:112px;height:30px;',
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:126px;top:8px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтвЛицоФинУр',
			text: 'Выбор вида отв.лица:',
			style: 'position:absolute;left:8px;top:8px;width:112px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});