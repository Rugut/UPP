Ext.require(['Данные.Документы.РеализацияТоваровУслуг'], function () 
{
	Ext.define('Документы.РеализацияТоваровУслуг.ФормаФормированияПакетаДокументов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:376px;height:501px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Оформить документы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать',
			style: 'position:absolute;left:14px;top:24px;width:81px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:221px;top:24px;width:140px;height:19px;',
			width: 140,
			height: 19,
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
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:8px;width:360px;height:65px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:183px;width:360px;height:94px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать форму настройки',
			style: 'position:absolute;left:14px;top:445px;width:173px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:404px;width:360px;height:64px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПечататьНаПринтер',
			text: 'Печатать на:',
			style: 'position:absolute;left:14px;top:421px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать',
			style: 'position:absolute;left:14px;top:345px;width:107px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:221px;top:345px;width:140px;height:19px;',
			width: 140,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьМакетПКО',
			text: 'Печатная форма:',
			style: 'position:absolute;left:126px;top:345px;width:90px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:282px;width:360px;height:117px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЭкземпляровРеализации',
			text: 'Количество экземпляров:',
			style: 'position:absolute;left:126px;top:48px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
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
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
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
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
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
			disabled: false,
			name: 'ОснованиеПКО',
			width: 235,
			height: 19,
			style: 'position:absolute;left:126px;top:321px;width:235px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Закрывать реализацию',
			style: 'position:absolute;left:221px;top:445px;width:140px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:221px;top:223px;width:140px;height:19px;',
			width: 140,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьМакетСФ',
			text: 'Печатная форма:',
			style: 'position:absolute;left:126px;top:223px;width:90px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Действия с документом "Расходный ордер на товары"',
			style: 'position:absolute;left:8px;top:83px;width:360px;height:94px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМакетРасходныйОрдерНаТовары',
			text: 'Печатная форма:',
			style: 'position:absolute;left:126px;top:123px;width:90px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:221px;top:123px;width:140px;height:19px;',
			width: 140,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открыть форму',
			style: 'position:absolute;left:264px;top:100px;width:97px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
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
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
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
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:476px;width:376px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});