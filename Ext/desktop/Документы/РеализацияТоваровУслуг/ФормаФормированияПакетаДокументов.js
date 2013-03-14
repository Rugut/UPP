Ext.define('Документы.РеализацияТоваровУслуг.ФормаФормированияПакетаДокументов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:376px;height:501px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оформить документы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:476px;width:376px;height:25px;',
			items:
			[
				{
					text:'Восстановить значения по умолчанию',
				},
				'-',
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать',
			style: 'position:absolute;left:14px;top:24px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМакетРеализации',
			text: 'Печатная форма:',
			style: 'position:absolute;left:126px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открыть форму',
			style: 'position:absolute;left:264px;top:199px;width:97px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать',
			style: 'position:absolute;left:14px;top:223px;width:107px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Записать',
			style: 'position:absolute;left:14px;top:199px;width:107px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать форму настройки',
			style: 'position:absolute;left:14px;top:445px;width:173px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПечататьНаПринтер',
			text: 'Печатать на:',
			style: 'position:absolute;left:14px;top:421px;width:71px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'принтер',
			style: 'position:absolute;left:90px;top:421px;width:65px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'экран',
			style: 'position:absolute;left:161px;top:421px;width:55px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать',
			style: 'position:absolute;left:14px;top:345px;width:107px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМакетПКО',
			text: 'Печатная форма:',
			style: 'position:absolute;left:126px;top:345px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭкземпляровРеализации',
			text: 'Количество экземпляров:',
			style: 'position:absolute;left:126px;top:48px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровРеализации',
			style: 'position:absolute;left:264px;top:48px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭкземпляровСчетаФактуры',
			text: 'Количество экземпляров:',
			style: 'position:absolute;left:126px;top:247px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровСчетаФактуры',
			style: 'position:absolute;left:264px;top:247px;width:97px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Провести',
			style: 'position:absolute;left:126px;top:297px;width:81px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открыть форму',
			style: 'position:absolute;left:264px;top:297px;width:97px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Записать',
			style: 'position:absolute;left:14px;top:297px;width:107px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭкземпляровПКО',
			text: 'Количество экземпляров:',
			style: 'position:absolute;left:126px;top:369px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровПКО',
			style: 'position:absolute;left:264px;top:369px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснованиеПКО',
			text: 'Основание платежа:',
			style: 'position:absolute;left:14px;top:321px;width:107px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОснованиеПКО',
			style: 'position:absolute;left:126px;top:321px;width:235px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Закрывать реализацию',
			style: 'position:absolute;left:221px;top:445px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМакетСФ',
			text: 'Печатная форма:',
			style: 'position:absolute;left:126px;top:223px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМакетРасходныйОрдерНаТовары',
			text: 'Печатная форма:',
			style: 'position:absolute;left:126px;top:123px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открыть форму',
			style: 'position:absolute;left:264px;top:100px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЭкземпляровРасходныйОрдерНаТовары',
			style: 'position:absolute;left:264px;top:147px;width:97px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Записать',
			style: 'position:absolute;left:14px;top:100px;width:107px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать',
			style: 'position:absolute;left:14px;top:123px;width:107px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭкземпляровРасходныйОрдерНаТовары',
			text: 'Количество экземпляров:',
			style: 'position:absolute;left:126px;top:147px;width:136px;height:19px;text-align:left;',
		},
	]
});