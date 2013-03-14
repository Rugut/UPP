Ext.define('Справочники.ФизическиеЛица.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:498px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Физическое лицо',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Имя:',
			style: 'position:absolute;left:8px;top:33px;width:38px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'Лицевые счета',
				},
				{
					text:'Медицинские страховые полисы',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФИО',
			text: 'ФИО:',
			style: 'position:absolute;left:8px;top:57px;width:38px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:473px;width:608px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
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
			style: 'position:absolute;left:8px;top:104px;width:592px;height:361px;',
			height: 361,width: 592,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:176px;top:99px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:388px;top:99px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС',
			style: 'position:absolute;left:100px;top:99px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:224px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:100px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:166px;width:578px;height:169px;',
			height: 169,width: 578,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Вид',
					width:'120',
				},
				{
					text:'Представление',
					width:'204',
				},
				{
					text:'Комментарий',
					width:'103',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:142px;width:578px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
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
					text:'',
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
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Основная',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МестоРождения',
			style: 'position:absolute;left:100px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удостоверение',
			style: 'position:absolute;left:100px;top:54px;width:388px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'По ОКАТО:',
			style: 'position:absolute;left:322px;top:30px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МестоРожденияКодПоОКАТО',
			style: 'position:absolute;left:400px;top:30px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'Персональные данные',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:6px;top:6px;width:92px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:124px;width:300px;height:69px;',
			height: 69,width: 300,
			columns:
			[
				{
					text:'Степень родства',
					width:'100',
				},
				{
					text:'Родственник',
					width:'100',
				},
				{
					text:'Дата рождения',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:247px;width:360px;height:88px;',
			height: 88,width: 360,
			columns:
			[
				{
					text:'Вид образования',
					width:'100',
				},
				{
					text:'Учебное заведение',
					width:'120',
				},
				{
					text:'Специальность',
					width:'120',
				},
				{
					text:'Диплом, серия, номер',
					width:'120',
				},
				{
					text:'Год окончания',
					width:'60',
				},
				{
					text:'Квалификация',
					width:'120',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:312px;top:124px;width:272px;height:69px;',
			height: 69,width: 272,
			columns:
			[
				{
					text:'Язык',
					width:'73',
				},
				{
					text:'Степень знания языка',
					width:'125',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСемейноеПоложение',
			text: 'Семейное положение:',
			style: 'position:absolute;left:6px;top:198px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СемейноеПоложение',
			style: 'position:absolute;left:124px;top:198px;width:182px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВоинскийУчет',
			text: 'Воинский учет:',
			style: 'position:absolute;left:6px;top:30px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВоинскийУчет',
			style: 'position:absolute;left:89px;top:30px;width:495px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство',
			text: 'Гражданство:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Гражданство',
			style: 'position:absolute;left:89px;top:6px;width:495px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:372px;top:247px;width:212px;height:88px;',
			height: 88,width: 212,
			columns:
			[
				{
					text:'Профессия',
					width:'220',
				},
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Инвалидность',
			style: 'position:absolute;left:89px;top:54px;width:495px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнвалидность',
			text: 'Инвалидность:',
			style: 'position:absolute;left:6px;top:54px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСвойства',
			text: 'Свойства',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЛьготаПриНачисленииПособий',
			style: 'position:absolute;left:428px;top:78px;width:156px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Предоставляются льготы как подвергшимся воздействию радиации в связи с:',
			style: 'position:absolute;left:6px;top:78px;width:422px;height:19px;',
		},
					]
				},
				{
					title:'Ученые степени, звания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:578px;height:80px;',
			height: 80,width: 578,
			columns:
			[
				{
					text:'Ученая степень',
					width:'100',
				},
				{
					text:'Дата присуждения ученой степени',
					width:'100',
				},
				{
					text:'Отрасль науки',
					width:'100',
				},
				{
					text:'Диссертационный совет',
					width:'100',
				},
				{
					text:'Диплом серия, номер',
					width:'100',
				},
				{
					text:'Наименование организации, выдавшей диплом',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:136px;width:578px;height:118px;',
			height: 118,width: 578,
			columns:
			[
				{
					text:'Ученое звание',
					width:'100',
				},
				{
					text:'Дата присвоения ученого звания',
					width:'100',
				},
				{
					text:'Аттестат серия',
					width:'100',
				},
				{
					text:'Аттестат номер',
					width:'100',
				},
				{
					text:'Наименование организации, выдавшей диплом',
					width:'100',
				},
				{
					text:'Научная специальность',
					width:'100',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Имеет научные труды',
			style: 'position:absolute;left:6px;top:268px;width:142px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Имеет изобретения',
			style: 'position:absolute;left:6px;top:289px;width:142px;height:15px;',
		},
					]
				},
				{
					title:'Награды',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:182px;top:6px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:578px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:578px;height:289px;',
			height: 289,width: 578,
			columns:
			[
				{
					text:'Награда',
					width:'100',
				},
				{
					text:'Номер приказа',
					width:'100',
				},
				{
					text:'Дата приказа',
					width:'100',
				},
				{
					text:'Приказ',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьУдостоверение',
			text: 'Удостоверение:',
			style: 'position:absolute;left:6px;top:54px;width:92px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:286px;height:311px;',
			height: 311,width: 286,
			columns:
			[
				{
					text:'Свойство',
					width:'100',
				},
				{
					text:'Значение',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:10px;top:101px;width:270px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:298px;top:24px;width:286px;height:311px;',
			height: 311,width: 286,
			columns:
			[
				{
					text:'Принадлежность',
					width:'21',
				},
				{
					text:'Категория',
					width:'257',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКатегории',
			text: 'Категории',
			style: 'position:absolute;left:298px;top:6px;width:286px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:307px;top:101px;width:269px;height:24px;',
			items:
			[
				{
					text:'&Добавить новую категорию',
				},
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:70px;width:578px;height:156px;',
			height: 156,width: 578,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Содержание',
					width:'120',
				},
				{
					text:'Вид заметки',
					width:'120',
				},
				{
					text:'Автор',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:46px;width:578px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:6px;top:250px;width:578px;height:85px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДоступа',
			style: 'position:absolute;left:97px;top:6px;width:487px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаДоступа',
			text: 'Группа доступа:',
			style: 'position:absolute;left:6px;top:6px;width:86px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:48px;top:33px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:48px;top:57px;width:182px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВызоваДанныхФИО',
			text: 'Смена ФИО',
			style: 'position:absolute;left:486px;top:57px;width:114px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:486px;top:33px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:520px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:236px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:362px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа физ. лиц:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:98px;top:81px;width:502px;height:19px;',
		},
	]
});