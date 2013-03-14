Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияЗагрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:767px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выполнение загрузки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:767px;height:25px;',
			items:
			[
				{
					text:'<< Назад',
				},
				'-',
				{
					text:'Далее >>',
				},
				'-',
				{
					text:'Готово',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:7px;width:752px;height:360px;',
			height: 360,width: 752,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ЗаполнениеТаблицыПолей',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:752px;height:320px;',
			height: 320,width: 752,
			columns:
			[
				{
					text:'№',
					width:'32',
				},
				{
					text:'Имя поля из файла',
					width:'280',
				},
				{
					text:'Имя или вид реквизита в информационной базе',
					width:'280',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:752px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Настройка формирования наименования объекта',
				},
			]
		},
					]
				},
				{
					title:'НастройкаПоискаОбъектов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:752px;height:320px;',
			height: 320,width: 752,
			columns:
			[
				{
					text:'№',
					width:'32',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Имя реквизита в информационной базе',
					width:'280',
				},
				{
					text:'Условие',
					width:'100',
				},
				{
					text:'Имя поля из файла',
					width:'280',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:752px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
					]
				},
				{
					title:'НастройкаЗагрузкиЗначений',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:69px;width:752px;height:291px;',
			height: 291,width: 752,
			columns:
			[
				{
					text:'№',
					width:'32',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Представление объекта файла',
					width:'180',
				},
				{
					text:'Наименование объекта в ИБ',
					width:'160',
				},
				{
					text:'Объект в ИБ',
					width:'120',
				},
				{
					text:'Юр/Физ лицо',
					width:'80',
				},
				{
					text:'Контрагент',
					width:'160',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:45px;width:752px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Посмотреть информацию из файла по текущей строке',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РодительДляЗагрузки',
			style: 'position:absolute;left:200px;top:21px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодительДляЗагрузки',
			text: 'Создавать новые элементы в группе:',
			style: 'position:absolute;left:0px;top:21px;width:197px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сохранять соответствие параметров и настройки поиска объектов для последующих загрузок',
			style: 'position:absolute;left:8px;top:372px;width:506px;height:15px;',
		},
	]
});