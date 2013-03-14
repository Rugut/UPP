Ext.define('Документы.ЗарплатаКВыплатеОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:524px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Зарплата к выплате',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:434px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:518px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:603px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:622px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:122px;top:33px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:434px;top:56px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:518px;top:56px;width:224px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:472px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:472px;width:644px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:231px;width:734px;height:198px;',
			height: 198,width: 734,
			columns:
			[
				{
					text:'Картинка',
					width:'21',
				},
				{
					text:'Признак автоматического расчета',
					width:'21',
				},
				{
					text:'№',
					width:'31',
				},
				{
					text:'Сотрудник',
					width:'217',
				},
				{
					text:'К выплате',
					width:'90',
				},
				{
					text:'Было начислено',
					width:'90',
				},
				{
					text:'Отложено',
					width:'90',
				},
				{
					text:'Компенсация за задержку зарплаты',
					width:'124',
				},
				{
					text:'Отметка',
					width:'90',
				},
				{
					text:'Документ',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:750px;height:25px;',
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
					]
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Редактировать номер',
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
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
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
				'-',
				{
					text:'Провести',
				},
				{
					text:'Действие1',
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
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:750px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:31px;top:436px;width:711px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:56px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:122px;top:56px;width:303px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:207px;width:734px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Подбор списком',
				},
				'-',
				{
					text:'Подбор по условию',
				},
				'-',
				{
					text:'Удалить пустые',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:734px;height:58px;',
			height: 58,width: 734,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:6px;width:111px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактерВыплаты',
			style: 'position:absolute;left:113px;top:31px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Выплачивать:',
			style: 'position:absolute;left:6px;top:31px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:422px;top:31px;width:304px;height:19px;',
			height: 19,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По документу',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по документу:',
			style: 'position:absolute;left:3px;top:0px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:87px;top:0px;width:217px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособВыплаты',
			style: 'position:absolute;left:324px;top:6px;width:92px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:422px;top:6px;width:304px;height:19px;',
			height: 19,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По документу',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:87px;top:0px;width:217px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:149px;width:111px;height:36px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьПараметрыЗаполнения',
			text: '',
			style: 'position:absolute;left:126px;top:165px;width:616px;height:33px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:38px;top:330px;width:500px;height:24px;',
			items:
			[
				{
					text:'Выплачено',
				},
				{
					text:'Депонировано',
				},
				'-',
				{
					text:'Не выплачено',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
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
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПараметрыЗаполнения',
			text: 'Расчет сумм к выплате:',
			style: 'position:absolute;left:126px;top:149px;width:616px;height:16px;',
		},
	]
});