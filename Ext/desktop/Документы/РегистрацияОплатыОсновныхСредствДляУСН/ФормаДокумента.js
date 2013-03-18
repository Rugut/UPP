Ext.define('Документы.РегистрацияОплатыОсновныхСредствДляУСН.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:540px;height:359px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация оплаты ОС и НМА для УСН',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:84px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:166px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:185px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:57px;width:221px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:540px;height:25px;',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:334px;width:540px;height:25px;',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:524px;height:195px;',
			height: 195,width: 524,
			items:
			[
				{
					title:'Основные средства',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:510px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:510px;height:139px;',
			height: 139,width: 510,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Основное средство',
					width:'150',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
				{
					text:'Сумма оплаты',
					width:'80',
				},
			]
		},
					]
				},
				{
					title:'Нематериальные активы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:510px;height:139px;',
			height: 139,width: 510,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Нематериальный актив',
					width:'150',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
				{
					text:'Сумма оплаты',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:510px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Модернизации ОС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:510px;height:139px;',
			height: 139,width: 510,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Документ модернизации',
					width:'100',
				},
				{
					text:'Дата оплаты',
					width:'100',
				},
				{
					text:'Сумма оплаты',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:510px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:282px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:282px;width:436px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:307px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:307px;width:436px;height:19px;',
		},
	]
});