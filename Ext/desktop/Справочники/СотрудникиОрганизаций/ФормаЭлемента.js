Ext.define('Справочники.СотрудникиОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:506px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сотрудники',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Данные сотрудника',
				},
				'-',
				{
					text:'Медицинские страховые полисы',
				},
					]
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:481px;width:700px;height:25px;',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:480px;top:33px;width:212px;height:440px;',
			height: 440,width: 212,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗакрытьСправкуФормы',
			text: 'Скрыть эту информацию о справочнике',
			style: 'position:absolute;left:0px;top:403px;width:210px;height:35px;text-align:right;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:466px;height:440px;',
			height: 440,width: 466,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница новый сотрудник',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:464px;height:69px;',
			height: 69,width: 464,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Создать нового сотрудника, выбрав его из справочника физических лиц',
			style: 'position:absolute;left:3px;top:36px;width:242px;height:28px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Создать нового сотрудника и ввести его личные данные в справочник физических лиц',
			style: 'position:absolute;left:3px;top:3px;width:267px;height:28px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:142px;width:466px;height:275px;',
			height: 275,width: 466,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:11px;top:49px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:95px;top:49px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:11px;top:26px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:95px;top:26px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:368px;top:49px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:338px;top:49px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодИМНС',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:226px;top:49px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС',
			style: 'position:absolute;left:292px;top:49px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:368px;top:26px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеСотрудника',
			text: 'Наименование:',
			style: 'position:absolute;left:11px;top:116px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТабНомер',
			text: 'Табельный №:',
			style: 'position:absolute;left:11px;top:209px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДоговора',
			text: 'Вид договора:',
			style: 'position:absolute;left:11px;top:139px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидЗанятости',
			text: 'Вид занятости:',
			style: 'position:absolute;left:11px;top:186px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:11px;top:162px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПерейтиКВводуТрудовогоДоговора',
			text: 'Перейти к вводу данных трудового договора...',
			style: 'position:absolute;left:212px;top:209px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РедактироватьФизлицоОтдельно',
			text: 'Более подробно о физическом лице Сергеев Иван Ильич ...',
			style: 'position:absolute;left:11px;top:72px;width:447px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЗанятости',
			style: 'position:absolute;left:95px;top:186px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:95px;top:162px;width:239px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:95px;top:209px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПередставлениеНаименования',
			style: 'position:absolute;left:95px;top:116px;width:349px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:95px;top:116px;width:363px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДоговора',
			style: 'position:absolute;left:95px;top:139px;width:239px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Является студентом работающим в студенческом отряде',
			style: 'position:absolute;left:95px;top:235px;width:320px;height:15px;',
		},
					]
				},
				{
					title:'Трудовой договор',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерДоговора',
			text: 'Договор №:',
			style: 'position:absolute;left:6px;top:6px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:174px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Действует с:',
			style: 'position:absolute;left:6px;top:29px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:174px;top:29px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбособленноеПодразделение',
			text: 'Обособл. подр.:',
			style: 'position:absolute;left:6px;top:52px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:75px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Должность:',
			style: 'position:absolute;left:6px;top:98px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИспытательныйСрок',
			text: 'Испытание на срок, мес.:',
			style: 'position:absolute;left:280px;top:29px;width:141px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗанимаемыхСтавок',
			text: 'Кол. ставок:',
			style: 'position:absolute;left:348px;top:121px;width:64px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафикРаботы',
			text: 'График работы:',
			style: 'position:absolute;left:6px;top:121px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаТарифнойСтавки',
			text: 'Валюта:',
			style: 'position:absolute;left:220px;top:187px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчета',
			text: 'Вид расчета:',
			style: 'position:absolute;left:11px;top:164px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТарифнаяСтавка',
			text: 'Тариф \ Оклад:',
			style: 'position:absolute;left:11px;top:187px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадбавкиПоТрудовомуДоговоруТекст',
			text: 'Надбавки по трудовому договору ...',
			style: 'position:absolute;left:11px;top:211px;width:447px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговора',
			style: 'position:absolute;left:92px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДоговора',
			style: 'position:absolute;left:192px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:92px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:192px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИспытательныйСрок',
			style: 'position:absolute;left:423px;top:29px;width:35px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбособленноеПодразделение',
			style: 'position:absolute;left:92px;top:52px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:92px;top:75px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:92px;top:98px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикРаботы',
			style: 'position:absolute;left:92px;top:121px;width:253px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗанимаемыхСтавок',
			style: 'position:absolute;left:414px;top:121px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:96px;top:164px;width:249px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаТарифнойСтавки',
			style: 'position:absolute;left:265px;top:187px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавка',
			style: 'position:absolute;left:96px;top:187px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифныйРазряд',
			style: 'position:absolute;left:96px;top:187px;width:249px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:223px;height:226px;',
			height: 226,width: 223,
			columns:
			[
				{
					text:'Свойство',
					width:'100',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСвойства',
			text: 'Свойства',
			style: 'position:absolute;left:6px;top:6px;width:59px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:23px;top:101px;width:77px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:235px;top:23px;width:223px;height:226px;',
			height: 226,width: 223,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'257',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКатегории',
			text: 'Категории',
			style: 'position:absolute;left:235px;top:6px;width:67px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:13px;top:146px;width:77px;height:24px;',
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
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:0px;top:79px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеФизлица',
			style: 'position:absolute;left:45px;top:79px;width:421px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО',
			text: 'ФИО:',
			style: 'position:absolute;left:0px;top:101px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:45px;top:101px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:214px;top:101px;width:125px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:341px;top:101px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппа',
			text: 'Группа сотрудника:',
			style: 'position:absolute;left:0px;top:421px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:103px;top:421px;width:363px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПерейтиКВводуГруппыДоступа',
			text: 'Введите группу доступа для физического лица ...',
			style: 'position:absolute;left:0px;top:123px;width:466px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Физлицо',
			style: 'position:absolute;left:45px;top:79px;width:421px;height:19px;',
		},
					]
				},
				{
					title:'Страница сотрудник',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименованиеСотрудника1',
			text: 'Наименование:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:84px;top:0px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод1',
			text: 'Табельный №:',
			style: 'position:absolute;left:0px;top:23px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДоговора1',
			text: 'Вид договора:',
			style: 'position:absolute;left:0px;top:46px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидЗанятости1',
			text: 'Вид занятости:',
			style: 'position:absolute;left:0px;top:95px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация1',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:71px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:119px;width:466px;height:298px;',
			height: 298,width: 466,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПол1',
			text: 'Пол:',
			style: 'position:absolute;left:6px;top:29px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол1',
			style: 'position:absolute;left:90px;top:29px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения1',
			text: 'Дата рождения:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения1',
			style: 'position:absolute;left:90px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН1',
			style: 'position:absolute;left:368px;top:29px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС1',
			style: 'position:absolute;left:292px;top:29px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР1',
			style: 'position:absolute;left:368px;top:6px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РедактироватьФизлицоОтдельно1',
			text: 'Более подробно о физическом лице Сергеев Иван Ильич ...',
			style: 'position:absolute;left:6px;top:52px;width:452px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство',
			text: 'Гражданство:',
			style: 'position:absolute;left:6px;top:74px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Гражданство',
			style: 'position:absolute;left:103px;top:74px;width:355px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Инвалидность',
			style: 'position:absolute;left:103px;top:97px;width:355px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнвалидность',
			text: 'Инвалидность:',
			style: 'position:absolute;left:6px;top:97px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство1',
			text: 'Стандартные:',
			style: 'position:absolute;left:11px;top:141px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтандартныеВычеты',
			style: 'position:absolute;left:103px;top:141px;width:355px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГражданство2',
			text: 'Имущественные:',
			style: 'position:absolute;left:11px;top:166px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмущественныеВычеты',
			style: 'position:absolute;left:103px;top:166px;width:355px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщикаПоНДФЛ',
			text: 'Статус:',
			style: 'position:absolute;left:11px;top:191px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:103px;top:191px;width:355px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Является студентом работающим в студенческом отряде',
			style: 'position:absolute;left:103px;top:217px;width:323px;height:15px;',
		},
					]
				},
				{
					title:'Кадровые данные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:452px;height:63px;',
			height: 63,width: 452,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Действует с',
					width:'74',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'100',
					dataIndex:'ДатаЗавершения',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'152',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Подразделение завершения',
					width:'100',
					dataIndex:'ПодразделениеОрганизацииЗавершения',
					flex:1,
				},
				{
					text:'Должность',
					width:'107',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Должность завершения',
					width:'100',
					dataIndex:'ДолжностьЗавершения',
					flex:1,
				},
				{
					text:'График работы',
					width:'111',
					dataIndex:'ГрафикРаботы',
					flex:1,
				},
				{
					text:'График работы завершения',
					width:'100',
					dataIndex:'ГрафикРаботыЗавершения',
					flex:1,
				},
				{
					text:'Занимаемых ставок',
					width:'84',
					dataIndex:'ЗанимаемыхСтавок',
					flex:1,
				},
				{
					text:'Занимаемых ставок завершения',
					width:'100',
					dataIndex:'ЗанимаемыхСтавокЗавершения',
					flex:1,
				},
				{
					text:'Причина изменения состояния',
					width:'100',
					dataIndex:'ПричинаИзмененияСостояния',
					flex:1,
				},
				{
					text:'Причина изменения состояния завершения',
					width:'100',
					dataIndex:'ПричинаИзмененияСостоянияЗавершения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'ДатаЗавершения',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'ПодразделениеОрганизацииЗавершения',
					},
					{
						name:'Должность',
					},
					{
						name:'ДолжностьЗавершения',
					},
					{
						name:'ГрафикРаботы',
					},
					{
						name:'ГрафикРаботыЗавершения',
					},
					{
						name:'ЗанимаемыхСтавок',
					},
					{
						name:'ЗанимаемыхСтавокЗавершения',
					},
					{
						name:'ПричинаИзмененияСостояния',
					},
					{
						name:'ПричинаИзмененияСостоянияЗавершения',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:128px;width:452px;height:144px;',
			height: 144,width: 452,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Дата',
					width:'140',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'100',
					dataIndex:'Номер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:104px;width:452px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
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
					text:'Изменить',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
					]
				},
				'-',
			]
		},
					]
				},
				{
					title:'Начисления и удержания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:452px;height:128px;',
			height: 128,width: 452,
			columns:
			[
				{
					text:'Действие',
					width:'65',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Действует с',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'200',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Показатели для расчета начисления',
					width:'235',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта1',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР1',
					flex:1,
				},
				{
					text:'Тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР2',
					flex:1,
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
					dataIndex:'ТарифныйРазряд2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР3',
					flex:1,
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
					dataIndex:'ТарифныйРазряд3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР4',
					flex:1,
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
					dataIndex:'ТарифныйРазряд4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР5',
					flex:1,
				},
				{
					text:'Тарифный разряд 5',
					width:'125',
					dataIndex:'ТарифныйРазряд5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР6',
					flex:1,
				},
				{
					text:'Тарифный разряд 6',
					width:'125',
					dataIndex:'ТарифныйРазряд6',
					flex:1,
				},
				{
					text:'Действие по окончании',
					width:'100',
					dataIndex:'ДействиеЗавершения',
					flex:1,
				},
				{
					text:'Действует с',
					width:'85',
					dataIndex:'ПериодЗавершения',
					flex:1,
				},
				{
					text:'Вид расчета по окончании',
					width:'120',
					dataIndex:'ВидРасчетаЗавершения',
					flex:1,
				},
				{
					text:'Показатели для расчета по окончании',
					width:'235',
					dataIndex:'ПоказателиЗавершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1Завершения',
					flex:1,
				},
				{
					text:'Размер',
					width:'80',
					dataIndex:'Показатель1Завершения',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'Валюта1Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР1Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд1Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель2Завершения',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'80',
					dataIndex:'Показатель2Завершения',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР2Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
					dataIndex:'ТарифныйРазряд2Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель3Завершения',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'80',
					dataIndex:'Показатель3Завершения',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР3Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
					dataIndex:'ТарифныйРазряд3Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель4Завершения',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'80',
					dataIndex:'Показатель4Завершения',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР4Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
					dataIndex:'ТарифныйРазряд4Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель5Завершения',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'80',
					dataIndex:'Показатель5Завершения',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР5Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд 5',
					width:'125',
					dataIndex:'ТарифныйРазряд5Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель6Завершения',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'80',
					dataIndex:'Показатель6Завершения',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6Завершения',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'110',
					dataIndex:'НаименованиеПоказательТР6Завершения',
					flex:1,
				},
				{
					text:'Тарифный разряд 6',
					width:'125',
					dataIndex:'ТарифныйРазряд6Завершения',
					flex:1,
				},
				{
					text:'Регистратор',
					width:'100',
					dataIndex:'Регистратор',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Действие',
					},
					{
						name:'Период',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказательТР1',
					},
					{
						name:'ТарифныйРазряд1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказательТР2',
					},
					{
						name:'ТарифныйРазряд2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказательТР3',
					},
					{
						name:'ТарифныйРазряд3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказательТР4',
					},
					{
						name:'ТарифныйРазряд4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказательТР5',
					},
					{
						name:'ТарифныйРазряд5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
					{
						name:'НаименованиеПоказательТР6',
					},
					{
						name:'ТарифныйРазряд6',
					},
					{
						name:'ДействиеЗавершения',
					},
					{
						name:'ПериодЗавершения',
					},
					{
						name:'ВидРасчетаЗавершения',
					},
					{
						name:'ПоказателиЗавершения',
					},
					{
						name:'НаименованиеПоказатель1Завершения',
					},
					{
						name:'Показатель1Завершения',
					},
					{
						name:'Валюта1Завершения',
					},
					{
						name:'НаименованиеПоказательТР1Завершения',
					},
					{
						name:'ТарифныйРазряд1Завершения',
					},
					{
						name:'НаименованиеПоказатель2Завершения',
					},
					{
						name:'Показатель2Завершения',
					},
					{
						name:'Валюта2Завершения',
					},
					{
						name:'НаименованиеПоказательТР2Завершения',
					},
					{
						name:'ТарифныйРазряд2Завершения',
					},
					{
						name:'НаименованиеПоказатель3Завершения',
					},
					{
						name:'Показатель3Завершения',
					},
					{
						name:'Валюта3Завершения',
					},
					{
						name:'НаименованиеПоказательТР3Завершения',
					},
					{
						name:'ТарифныйРазряд3Завершения',
					},
					{
						name:'НаименованиеПоказатель4Завершения',
					},
					{
						name:'Показатель4Завершения',
					},
					{
						name:'Валюта4Завершения',
					},
					{
						name:'НаименованиеПоказательТР4Завершения',
					},
					{
						name:'ТарифныйРазряд4Завершения',
					},
					{
						name:'НаименованиеПоказатель5Завершения',
					},
					{
						name:'Показатель5Завершения',
					},
					{
						name:'Валюта5Завершения',
					},
					{
						name:'НаименованиеПоказательТР5Завершения',
					},
					{
						name:'ТарифныйРазряд5Завершения',
					},
					{
						name:'НаименованиеПоказатель6Завершения',
					},
					{
						name:'Показатель6Завершения',
					},
					{
						name:'Валюта6Завершения',
					},
					{
						name:'НаименованиеПоказательТР6Завершения',
					},
					{
						name:'ТарифныйРазряд6Завершения',
					},
					{
						name:'Регистратор',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:174px;width:452px;height:97px;',
			height: 97,width: 452,
			columns:
			[
				{
					text:'Действие',
					width:'60',
					dataIndex:'Действие',
					flex:1,
				},
				{
					text:'Действует с',
					width:'66',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'110',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Показатели для расчета удержания',
					width:'235',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Показатель 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта 1',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Показатель 2',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Показатель 3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Показатель 4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Показатель 5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Показатель 6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
				{
					text:'Действие по окончании',
					width:'82',
					dataIndex:'ДействиеЗавершения',
					flex:1,
				},
				{
					text:'Действует с',
					width:'83',
					dataIndex:'ПериодЗавершения',
					flex:1,
				},
				{
					text:'Показатели для расчета по окончании',
					width:'235',
					dataIndex:'ПоказателиЗавершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель1Завершения',
					flex:1,
				},
				{
					text:'Показатель 1',
					width:'80',
					dataIndex:'Показатель1Завершения',
					flex:1,
				},
				{
					text:'Валюта 1',
					width:'45',
					dataIndex:'Валюта1Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель2Завершения',
					flex:1,
				},
				{
					text:'Показатель 2',
					width:'80',
					dataIndex:'Показатель2Завершения',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель3Завершения',
					flex:1,
				},
				{
					text:'Показатель 3',
					width:'80',
					dataIndex:'Показатель3Завершения',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель4Завершения',
					flex:1,
				},
				{
					text:'Показатель 4',
					width:'80',
					dataIndex:'Показатель4Завершения',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель5Завершения',
					flex:1,
				},
				{
					text:'Показатель 5',
					width:'80',
					dataIndex:'Показатель5Завершения',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5Завершения',
					flex:1,
				},
				{
					text:'Показатель',
					width:'110',
					dataIndex:'НаименованиеПоказатель6Завершения',
					flex:1,
				},
				{
					text:'Показатель 6',
					width:'80',
					dataIndex:'Показатель6Завершения',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6Завершения',
					flex:1,
				},
				{
					text:'Регистратор',
					width:'100',
					dataIndex:'Регистратор',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Действие',
					},
					{
						name:'Дата',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
					{
						name:'ДействиеЗавершения',
					},
					{
						name:'ПериодЗавершения',
					},
					{
						name:'ПоказателиЗавершения',
					},
					{
						name:'НаименованиеПоказатель1Завершения',
					},
					{
						name:'Показатель1Завершения',
					},
					{
						name:'Валюта1Завершения',
					},
					{
						name:'НаименованиеПоказатель2Завершения',
					},
					{
						name:'Показатель2Завершения',
					},
					{
						name:'Валюта2Завершения',
					},
					{
						name:'НаименованиеПоказатель3Завершения',
					},
					{
						name:'Показатель3Завершения',
					},
					{
						name:'Валюта3Завершения',
					},
					{
						name:'НаименованиеПоказатель4Завершения',
					},
					{
						name:'Показатель4Завершения',
					},
					{
						name:'Валюта4Завершения',
					},
					{
						name:'НаименованиеПоказатель5Завершения',
					},
					{
						name:'Показатель5Завершения',
					},
					{
						name:'Валюта5Завершения',
					},
					{
						name:'НаименованиеПоказатель6Завершения',
					},
					{
						name:'Показатель6Завершения',
					},
					{
						name:'Валюта6Завершения',
					},
					{
						name:'Регистратор',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:324px;top:66px;width:125px;height:24px;',
			items:
			[
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:316px;top:194px;width:125px;height:24px;',
			items:
			[
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
				{
					title:'Отражение в учете',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:170px;width:452px;height:102px;',
			height: 102,width: 452,
			columns:
			[
				{
					text:'Действует с',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Способ отражения в бухучете',
					width:'120',
					dataIndex:'СпособОтраженияВБухучете',
					flex:1,
				},
				{
					text:'Код дохода ЕСН',
					width:'120',
					dataIndex:'КодДоходаЕСН',
					flex:1,
				},
				{
					text:'Отнесение расходов к деятельности ЕНВД',
					width:'60',
					dataIndex:'ОтнесениеРасходовКДеятельностиЕНВД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Период',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'СпособОтраженияВБухучете',
					},
					{
						name:'КодДоходаЕСН',
					},
					{
						name:'ОтнесениеРасходовКДеятельностиЕНВД',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:452px;height:77px;',
			height: 77,width: 452,
			columns:
			[
				{
					text:'Действует с',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Способ отражения в бухучете',
					width:'120',
					dataIndex:'СпособОтраженияВБухучете',
					flex:1,
				},
				{
					text:'До 2011 года. Способ отражения в бухучете больничного за счет работодателя',
					width:'120',
					dataIndex:'СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'36',
					dataIndex:'ПодпадаетПодЕНВД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Период',
					},
					{
						name:'СпособОтраженияВБухучете',
					},
					{
						name:'СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя',
					},
					{
						name:'ПодпадаетПодЕНВД',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:452px;height:24px;',
			items:
			[
				{
					text:'Показать историю ...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:146px;width:452px;height:24px;',
			items:
			[
				{
					text:'Показать историю ...',
				},
			]
		},
					]
				},
				{
					title:'Трудовой договор',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерДоговора1',
			text: 'Договор №:',
			style: 'position:absolute;left:6px;top:29px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт1',
			text: 'от:',
			style: 'position:absolute;left:174px;top:29px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала1',
			text: 'Действует с:',
			style: 'position:absolute;left:6px;top:52px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо1',
			text: 'по',
			style: 'position:absolute;left:174px;top:52px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьИспытательныйСрок1',
			text: 'Испытание на срок, мес.:',
			style: 'position:absolute;left:279px;top:52px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбособленноеПодразделение1',
			text: 'Обособл. подр.:',
			style: 'position:absolute;left:6px;top:75px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации1',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:98px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность1',
			text: 'Должность:',
			style: 'position:absolute;left:6px;top:121px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафикРаботы1',
			text: 'График работы:',
			style: 'position:absolute;left:6px;top:144px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаТарифнойСтавки1',
			text: 'Валюта:',
			style: 'position:absolute;left:220px;top:210px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчета1',
			text: 'Вид расчета:',
			style: 'position:absolute;left:11px;top:187px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТарифнаяСтавка1',
			text: 'Тариф \ Оклад:',
			style: 'position:absolute;left:11px;top:210px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадбавкиПоТрудовомуДоговоруТекст1',
			text: 'Надбавки по трудовому договору ...',
			style: 'position:absolute;left:11px;top:233px;width:447px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТрудовойДоговор',
			text: 'Данные трудового договора при приеме сотрудника на работу',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговора1',
			style: 'position:absolute;left:92px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДоговора1',
			style: 'position:absolute;left:192px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала1',
			style: 'position:absolute;left:92px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания1',
			style: 'position:absolute;left:192px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИспытательныйСрок1',
			style: 'position:absolute;left:423px;top:52px;width:35px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗанимаемыхСтавок1',
			style: 'position:absolute;left:414px;top:144px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикРаботы1',
			style: 'position:absolute;left:92px;top:144px;width:253px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбособленноеПодразделение1',
			style: 'position:absolute;left:92px;top:75px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации1',
			style: 'position:absolute;left:92px;top:98px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность1',
			style: 'position:absolute;left:92px;top:121px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаТарифнойСтавки1',
			style: 'position:absolute;left:265px;top:210px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета1',
			style: 'position:absolute;left:96px;top:187px;width:249px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавка1',
			style: 'position:absolute;left:96px;top:210px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифныйРазряд1',
			style: 'position:absolute;left:96px;top:210px;width:249px;height:19px;',
		},
					]
				},
				{
					title:'Список договоров',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИНН1',
			text: 'ИНН:',
			style: 'position:absolute;left:338px;top:29px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:266px;',
			height: 266,width: 452,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номер',
					width:'100',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'83',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'84',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'84',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'СуммаЗаРаботу',
					flex:1,
				},
				{
					text:'Валюта',
					width:'47',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Оплата',
					width:'120',
					dataIndex:'Оплата',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'СуммаЗаРаботу',
					},
					{
						name:'Валюта',
					},
					{
						name:'Оплата',
					},
				]
			},
		},
					]
				},
				{
					title:'Кадровые данные',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодИМНС1',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:226px;top:29px;width:64px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:452px;height:48px;',
			height: 48,width: 452,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Действует с',
					width:'84',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Должность',
					width:'120',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'График работы',
					width:'120',
					dataIndex:'ГрафикРаботы',
					flex:1,
				},
				{
					text:'Занимаемых ставок',
					width:'42',
					dataIndex:'ЗанимаемыхСтавок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'ГрафикРаботы',
					},
					{
						name:'ЗанимаемыхСтавок',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:91px;width:452px;height:24px;',
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
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Провести',
				},
				{
					text:'Отмена проведения',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Ввести на основании)',
				},
					]
				},
				'-',
				'-',
				{
					text:'Вывести список...',
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
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
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
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:115px;width:452px;height:157px;',
			height: 157,width: 452,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Дата',
					width:'140',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'100',
					dataIndex:'Номер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
				]
			},
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтрНомер1',
			text: 'Страховой номер ПФР:',
			style: 'position:absolute;left:226px;top:6px;width:140px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:223px;height:249px;',
			height: 249,width: 223,
			columns:
			[
				{
					text:'Свойство',
					width:'100',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСвойства1',
			text: 'Свойства',
			style: 'position:absolute;left:6px;top:6px;width:59px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:21px;top:112px;width:95px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:235px;top:23px;width:223px;height:249px;',
			height: 249,width: 223,
			columns:
			[
				{
					text:'Принадлежность',
					width:'26',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'100',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКатегории1',
			text: 'Категории',
			style: 'position:absolute;left:235px;top:6px;width:71px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:25px;top:148px;width:91px;height:24px;',
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
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГруппа1',
			text: 'Группа сотрудника:',
			style: 'position:absolute;left:0px;top:421px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДоговора1',
			style: 'position:absolute;left:84px;top:46px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЗанятости1',
			style: 'position:absolute;left:84px;top:95px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация1',
			style: 'position:absolute;left:84px;top:71px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код1',
			style: 'position:absolute;left:84px;top:23px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель1',
			style: 'position:absolute;left:103px;top:421px;width:363px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПередставлениеНаименования1',
			style: 'position:absolute;left:84px;top:0px;width:237px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАктуальностьСотрудника',
			text: ' Сотрудник помещен в архив',
			style: 'position:absolute;left:189px;top:23px;width:170px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'СменитьФИО',
			text: 'Смена ФИО',
			style: 'position:absolute;left:339px;top:0px;width:127px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:650px;top:0px;width:50px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Переключить видимость справки формы',
				},
			]
		},
	]
});