Ext.define('Документы.СписаниеНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:624px;height:253px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Списание НМА',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:179px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:207px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:178px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 520,
			height: 19,
			style: 'position:absolute;left:96px;top:178px;width:520px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:201px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 520,
			height: 19,
			style: 'position:absolute;left:96px;top:201px;width:520px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 520,
			height: 19,
			style: 'position:absolute;left:96px;top:56px;width:520px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:474px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать в:',
			style: 'position:absolute;left:335px;top:33px;width:63px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:547px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияБУ',
			text: 'Счет (БУ):',
			style: 'position:absolute;left:8px;top:132px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетСписанияБУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:132px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНУ',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:8px;top:155px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетСписанияНУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:155px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоБУ',
			text: 'Субконто :',
			style: 'position:absolute;left:207px;top:132px;width:59px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоБУ',
			width: 347,
			height: 19,
			style: 'position:absolute;left:269px;top:132px;width:347px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУ',
			text: 'Субконто :',
			style: 'position:absolute;left:207px;top:155px;width:59px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоНУ',
			width: 347,
			height: 19,
			style: 'position:absolute;left:269px;top:155px;width:347px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Счета учета затрат на списание остаточной стоимости',
			style: 'position:absolute;left:8px;top:110px;width:608px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Нематериаль- ный актив:',
			style: 'position:absolute;left:8px;top:76px;width:82px;height:28px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'НематериальныйАктив',
			width: 520,
			height: 19,
			style: 'position:absolute;left:96px;top:79px;width:520px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:402px;top:33px;width:70px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:228px;width:624px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
	]
});