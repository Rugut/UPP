Ext.define('Справочники.Подразделения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:538px;height:472px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подразделения',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:404px;top:33px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:430px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:91px;top:33px;width:300px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:538px;height:25px;',
			items:
			[
				{
					text:'Найти в списке',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'Настройка доступа',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Редактировать код',
				},
				{
					text:'Скопировать',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:447px;width:538px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:57px;width:81px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководительТекст',
			text: '',
			style: 'position:absolute;left:91px;top:57px;width:427px;height:34px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидПодразделения',
			text: 'Вид:',
			style: 'position:absolute;left:8px;top:93px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПодразделения',
			style: 'position:absolute;left:93px;top:93px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидЦФО',
			text: 'Вид ЦФО:',
			style: 'position:absolute;left:8px;top:120px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЦФО',
			style: 'position:absolute;left:93px;top:120px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнойПроект',
			text: 'Основной проект:',
			style: 'position:absolute;left:8px;top:143px;width:84px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойПроект',
			style: 'position:absolute;left:93px;top:143px;width:295px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:186px;width:522px;height:253px;',
			height: 253,width: 522,
			items:
			[
				{
					title:'Соответствие подразделений',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:510px;height:206px;',
			height: 206,width: 510,
			columns:
			[
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Подразделение организации',
					width:'120',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСоответствиеПодразделений',
			text: 'Соответствие подразделениям организаций',
			style: 'position:absolute;left:6px;top:6px;width:510px;height:15px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:257px;top:26px;width:257px;height:201px;',
			height: 201,width: 257,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Принадлежность',
					width:'25',
				},
				{
					text:'Категория',
					width:'120',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:26px;width:247px;height:201px;',
			height: 201,width: 247,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Свойство',
					width:'120',
				},
				{
					text:'Значение',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:63px;width:247px;height:24px;',
			items:
			[
				{
					text:'&Добавить новое свойство',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:257px;top:63px;width:247px;height:24px;',
			items:
			[
				{
					text:'Вывести список...',
				},
				{
					text:'&Добавить новую категорию',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:170px;width:522px;height:16px;',
			height: 16,width: 522,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});