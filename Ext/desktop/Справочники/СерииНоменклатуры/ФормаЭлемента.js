Ext.define('Справочники.СерииНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:317px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Серии номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:292px;width:604px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:151px;top:33px;width:445px;height:251px;',
			height: 251,width: 445,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:362px;top:33px;width:34px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:397px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:6px;top:33px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:120px;top:33px;width:238px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Владелец:',
			style: 'position:absolute;left:6px;top:6px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:120px;top:6px;width:317px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерийныйНомер',
			text: 'Номер серии:',
			style: 'position:absolute;left:6px;top:62px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерийныйНомер',
			style: 'position:absolute;left:120px;top:61px;width:317px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокГодности',
			text: 'Срок годности:',
			style: 'position:absolute;left:6px;top:162px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокГодности',
			style: 'position:absolute;left:120px;top:162px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерГТД',
			text: 'Номер ГТД:',
			style: 'position:absolute;left:6px;top:86px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерГТД',
			style: 'position:absolute;left:120px;top:86px;width:317px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтрана',
			text: 'Страна :',
			style: 'position:absolute;left:6px;top:112px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтранаПроисхождения',
			style: 'position:absolute;left:120px;top:112px;width:317px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Комментарий:',
			style: 'position:absolute;left:6px;top:137px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:120px;top:137px;width:317px;height:19px;',
		},
					]
				},
				{
					title:'Сертификация',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерСертификата',
			text: 'Сертификат №:',
			style: 'position:absolute;left:6px;top:27px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСертификата',
			style: 'position:absolute;left:120px;top:27px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСертификата',
			text: 'от',
			style: 'position:absolute;left:332px;top:27px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСертификата',
			style: 'position:absolute;left:349px;top:27px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСертификации',
			style: 'position:absolute;left:120px;top:53px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСертификации',
			text: 'Дата сертификации:',
			style: 'position:absolute;left:6px;top:53px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаЗаписьСертификации',
			text: '',
			style: 'position:absolute;left:6px;top:77px;width:431px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСертификатаВнутреннего',
			text: 'Сертификат №:',
			style: 'position:absolute;left:6px;top:137px;width:114px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСертификатаВнутр',
			style: 'position:absolute;left:120px;top:137px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСертификатаВнутр',
			text: 'от',
			style: 'position:absolute;left:332px;top:137px;width:13px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСертификатаВнутр',
			style: 'position:absolute;left:349px;top:137px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСертификацииВнутр',
			style: 'position:absolute;left:120px;top:162px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСертификации1',
			text: 'Дата сертификации:',
			style: 'position:absolute;left:6px;top:162px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаЗаписьСертификацииВнутр',
			text: '',
			style: 'position:absolute;left:6px;top:187px;width:431px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
	]
});