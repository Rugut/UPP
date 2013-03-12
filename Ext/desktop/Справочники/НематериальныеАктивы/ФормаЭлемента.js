Ext.define('Справочники.НематериальныеАктивы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:441px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Нематериальные активы и расходы на НИОКР',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:410px;top:56px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:452px;top:56px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:56px;width:312px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:398px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:83px;width:84px;height:27px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:94px;top:83px;width:398px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидНМА',
			text: 'Вид НМА:',
			style: 'position:absolute;left:14px;top:176px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидНМА',
			style: 'position:absolute;left:152px;top:176px;width:340px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАмортизационнаяГруппа',
			text: 'Амортизационная группа:',
			style: 'position:absolute;left:14px;top:199px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АмортизационнаяГруппа',
			style: 'position:absolute;left:152px;top:199px;width:340px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:416px;width:500px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВидОбъектаУчета',
			text: 'Вид объекта учета:',
			style: 'position:absolute;left:14px;top:153px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОбъектаУчета',
			style: 'position:absolute;left:152px;top:153px;width:340px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:225px;width:484px;height:183px;',
			height: 183,width: 484,
			items:
			[
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ПрочиеСведения',
			style: 'position:absolute;left:6px;top:24px;width:470px;height:133px;',
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:470px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:470px;height:122px;',
			height: 122,width: 470,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Свойство',
					width:'120',
				},
				{
					text:'Значение',
					width:'240',
				},
			]
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:470px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:470px;height:122px;',
			height: 122,width: 470,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Категория',
					width:'188',
				},
			]
		},
					]
				},
			]
		},
	]
});