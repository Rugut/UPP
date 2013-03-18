Ext.define('Обработки.ПоискЭлектронныхПисемПоОбъектам.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поиск электронных писем по объектам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Поиск по номеру...',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Поиск по номеру...',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
				{
					text:'(Ввести на основании)',
				},
				{
					text:'(Ввести на основании)',
				},
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
					]
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:680px;height:320px;',
			height: 320,width: 680,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Создано',
					width:'80',
				},
				{
					text:'Отправлено/получено',
					width:'80',
				},
				{
					text:'От кого',
					width:'120',
				},
				{
					text:'Кому',
					width:'120',
				},
				{
					text:'Тема',
					width:'220',
				},
				{
					text:'Номер',
					width:'21',
				},
				{
					text:'Учетная запись',
					width:'27',
				},
				{
					text:'Ответственный',
					width:'80',
				},
				{
					text:'Основание',
					width:'86',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:50px;top:33px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиОбъектПоиска',
			style: 'position:absolute;left:236px;top:33px;width:452px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Отбор:',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:658px;top:0px;width:38px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Справка',
				},
			]
		},
	]
});