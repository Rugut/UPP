Ext.define('Документы.РезервированиеПомещений.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:378px;height:309px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Резервирование помещения',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьДатаРезервирования',
			text: 'Начиная с:',
			style: 'position:absolute;left:8px;top:109px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРезервирования',
			width: 120,
			height: 19,
			style: 'position:absolute;left:96px;top:109px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:163px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 362,
			height: 41,
			style: 'position:absolute;left:8px;top:182px;width:362px;height:41px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПомещение',
			text: 'Помещение:',
			style: 'position:absolute;left:8px;top:33px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Помещение',
			width: 274,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:274px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:134px;width:362px;height:19px;',
			height: 19,width: 362,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Занято',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДней',
			text: 'Дней:',
			style: 'position:absolute;left:0px;top:0px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПродолжительностьДней',
			style: 'position:absolute;left:88px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЧасов',
			text: 'Часов и минут:',
			style: 'position:absolute;left:226px;top:0px;width:84px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВремяОкончания',
			width: 50,
			height: 19,
			style: 'position:absolute;left:312px;top:0px;width:50px;height:19px;',
		},
					]
				},
				{
					title:'Недоступно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаОкончанияРезервирования',
			text: 'До:',
			style: 'position:absolute;left:0px;top:0px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияРезервирования',
			width: 120,
			height: 19,
			style: 'position:absolute;left:88px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'Дата регистрации:',
			style: 'position:absolute;left:8px;top:233px;width:98px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:114px;top:233px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Зарегистрировал:',
			style: 'position:absolute;left:8px;top:257px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 256,
			height: 19,
			style: 'position:absolute;left:114px;top:257px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:247px;top:233px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:290px;top:233px;width:80px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Занято',
			style: 'position:absolute;left:8px;top:61px;width:362px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Недоступно',
			style: 'position:absolute;left:8px;top:81px;width:362px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:378px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:284px;width:378px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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