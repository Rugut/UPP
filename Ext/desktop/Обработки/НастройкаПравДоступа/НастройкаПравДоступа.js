Ext.define('Обработки.НастройкаПравДоступа.НастройкаПравДоступа',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:854px;height:378px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка прав доступа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:854px;height:25px;',
			items:
			[
				{
					text:'Заполнить',
				},
				{
					text:'Справка',
				},
				{
					text:'Настройка прав доступа',
				},
				'-',
				{
					text:'Отображать наследуемые записи',
				},
				'-',
				{
					text:'Сведения о группах пользователей',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:353px;width:854px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:230px;top:33px;width:616px;height:312px;',
			height: 312,width: 616,
			items:
			[
				{
					title:'Контрагенты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Видимость в списке',
					width:'63',
				},
				{
					text:'Запись',
					width:'55',
				},
				{
					text:'Просмотр доп. информации',
					width:'80',
				},
				{
					text:'Редактирование доп. информации',
					width:'96',
				},
				{
					text:'Просмотр данных',
					width:'60',
				},
				{
					text:'Редактирование данных',
					width:'91',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСлужебная',
			text: 'НадписьСлужебная',
			style: 'position:absolute;left:6px;top:112px;width:602px;height:45px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				'-',
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'Установить флажки',
				},
			]
		},
					]
				},
				{
					title:'Организации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Чтение',
					width:'47',
				},
				{
					text:'Запись',
					width:'47',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				{
					text:'&Удалить',
				},
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Подразделения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Чтение',
					width:'47',
				},
				{
					text:'Запись',
					width:'46',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Установить флажки',
				},
				{
					text:'&Добавить',
				},
				'-',
				'-',
				{
					text:'&Изменить',
				},
			]
		},
					]
				},
				{
					title:'Проекты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Чтение',
					width:'47',
				},
				{
					text:'Запись',
					width:'49',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				'-',
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Склады',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Чтение',
					width:'47',
				},
				{
					text:'Запись',
					width:'48',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				{
					text:'Снять флажки',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Подбор',
				},
				'-',
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'&Добавить',
				},
			]
		},
					]
				},
				{
					title:'Физические лица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Видимость в списке',
					width:'67',
				},
				{
					text:'Запись',
					width:'67',
				},
				{
					text:'Просмотр данных',
					width:'73',
				},
				{
					text:'Редактирование данных',
					width:'89',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				'-',
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'&Удалить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Установить флажки',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Снять флажки',
				},
			]
		},
					]
				},
				{
					title:'Внешние обработки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Чтение',
					width:'45',
				},
				{
					text:'Запись',
					width:'45',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'Снять флажки',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Установить флажки',
				},
				{
					text:'&Добавить',
				},
			]
		},
					]
				},
				{
					title:'Заметки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Чтение',
					width:'49',
				},
				{
					text:'Запись',
					width:'48',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Подразделения организаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Чтение',
					width:'49',
				},
				{
					text:'Запись',
					width:'57',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Подбор',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Установить флажки',
				},
				'-',
				{
					text:'Снять флажки',
				},
			]
		},
					]
				},
				{
					title:'Кандидаты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Чтение',
					width:'51',
				},
				{
					text:'Запись',
					width:'51',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				{
					text:'Снять флажки',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Подбор',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Установить флажки',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Скопировать',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:240px;',
			height: 240,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Запись',
					width:'48',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'&Удалить',
				},
			]
		},
					]
				},
				{
					title:'Спецификации',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Снять флажки',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'Установить флажки',
				},
				{
					text:'&Добавить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:602px;height:224px;',
			height: 224,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Чтение',
					width:'47',
				},
				{
					text:'Запись',
					width:'47',
				},
			]
		},
					]
				},
				{
					title:'Цены номенклатуры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:602px;height:223px;',
			height: 223,width: 602,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект доступа',
					width:'100',
				},
				{
					text:'Группа пользователей',
					width:'100',
				},
				{
					text:'Владелец прав доступа',
					width:'100',
				},
				{
					text:'Вид наследования прав доступа иерархических справочников',
					width:'100',
				},
				{
					text:'Цены компании',
					width:'61',
				},
				{
					text:'Чтение',
					width:'45',
				},
				{
					text:'Запись',
					width:'50',
				},
				{
					text:'Цены контрагентов',
					width:'107',
				},
				{
					text:'Чтение',
					width:'49',
				},
				{
					text:'Запись',
					width:'58',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Подбор',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'Установить флажки',
				},
			]
		},
					]
				},
				{
					title:'Страница служебная',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:215px;height:312px;',
			height: 312,width: 215,
			columns:
			[
				{
					text:'Наименование',
					width:'185',
				},
			]
		},
	]
});