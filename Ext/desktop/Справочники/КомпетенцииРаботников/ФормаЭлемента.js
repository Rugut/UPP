Ext.define('Справочники.КомпетенцииРаботников.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:406px;height:428px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Компетенция сотрудника',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:117px;top:33px;width:281px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
				'-',
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
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:403px;width:406px;height:25px;',
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
			style: 'position:absolute;left:8px;top:82px;width:390px;height:313px;',
			height: 313,width: 390,
			items:
			[
				{
					title:'Описание компетенции',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ОписаниеКомпетенции',
			style: 'position:absolute;left:6px;top:6px;width:376px;height:281px;',
		},
					]
				},
				{
					title:'Оценка компетенции',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьШкалаОценок',
			text: 'Шкала оценок:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ШкалаОценок',
			style: 'position:absolute;left:96px;top:6px;width:286px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТиповаяАнкета',
			text: 'Типовая анкета:',
			style: 'position:absolute;left:6px;top:30px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТиповаяАнкета',
			style: 'position:absolute;left:96px;top:30px;width:286px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:84px;width:376px;height:203px;',
			height: 203,width: 376,
			columns:
			[
				{
					text:'Оценка',
					width:'140',
				},
				{
					text:'Приоритет',
					width:'60',
				},
				{
					text:'Ожидаемая доля оценки,  %',
					width:'80',
				},
				{
					text:'Описание оценки',
					width:'250',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа компетенций:',
			style: 'position:absolute;left:8px;top:58px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:117px;top:58px;width:281px;height:19px;',
		},
	]
});