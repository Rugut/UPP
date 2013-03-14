Ext.define('Справочники.РегистрацияВИФНС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:480px;height:382px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация в ИФНС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код налогового органа:',
			style: 'position:absolute;left:8px;top:60px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:144px;top:60px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:144px;top:137px;width:328px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:480px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
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
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:357px;width:480px;height:25px;',
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
			style: 'position:absolute;left:218px;top:60px;width:198px;height:19px;',
			height: 19,width: 198,
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
			name: 'КПП',
			style: 'position:absolute;left:106px;top:0px;width:92px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Кра��коеНаименование',
			style: 'position:absolute;left:144px;top:109px;width:328px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставитель',
			text: 'Представитель:',
			style: 'position:absolute;left:14px;top:187px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолноеНаименование',
			text: 'Полное:',
			style: 'position:absolute;left:14px;top:137px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКраткоеНаименование',
			text: 'Краткое:',
			style: 'position:absolute;left:14px;top:109px;width:125px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:210px;width:458px;height:115px;',
			height: 115,width: 458,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументПредставителя',
			text: 'Документ, подтверждающий полномочия представителя:',
			style: 'position:absolute;left:0px;top:33px;width:128px;height:82px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ДокументПредставителя',
			style: 'position:absolute;left:130px;top:33px;width:328px;height:82px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УполномоченноеЛицоПредставителя',
			style: 'position:absolute;left:130px;top:5px;width:328px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИОУполномоченногоФизлица',
			text: 'ФИО уполномоченного лица представителя:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:27px;',
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументПредставителя1',
			text: 'Документ, подтверждающий полномочия представителя:',
			style: 'position:absolute;left:0px;top:9px;width:128px;height:106px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПредставителя1',
			style: 'position:absolute;left:130px;top:9px;width:328px;height:106px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Представитель',
			style: 'position:absolute;left:144px;top:187px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:144px;top:33px;width:328px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:131px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоверенность',
			text: 'Доверенность:',
			style: 'position:absolute;left:14px;top:330px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Доверенность',
			style: 'position:absolute;left:144px;top:330px;width:328px;height:19px;',
		},
	]
});