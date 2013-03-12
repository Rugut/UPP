Ext.define('Справочники.ТиповыеАнкеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:445px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Типовая анкета',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:316px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:95px;top:33px;width:217px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:445px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Редактировать код',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:445px;height:25px;',
			items:
			[
				{
					text:'Просмотр HTML',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				'-',
				'-',
				'-',
				{
					text:'Рассылка',
				},
				{
					text:'ОК',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:166px;width:430px;height:272px;',
			height: 272,width: 430,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Предназначена для загрузки данных в справочник "Физические лица"',
			style: 'position:absolute;left:6px;top:67px;width:416px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Предназначена для адресной рассылки',
			style: 'position:absolute;left:6px;top:30px;width:416px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидАнкеты',
			text: 'Вид анкеты:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидАнкеты',
			style: 'position:absolute;left:86px;top:6px;width:336px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заполнять анкету данными',
			style: 'position:absolute;left:6px;top:49px;width:416px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСекундОтвета',
			text: 'Секунд ответа:',
			style: 'position:absolute;left:5px;top:90px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СекундОтвета',
			style: 'position:absolute;left:86px;top:90px;width:46px;height:19px;',
		},
					]
				},
				{
					title:'Состав вопросов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:166px;width:416px;height:80px;',
			height: 80,width: 416,
			columns:
			[
				{
					text:'Раздел',
					width:'80',
				},
				{
					text:'№',
					width:'27',
				},
				{
					text:'Вопрос',
					width:'227',
				},
				{
					text:'Обязательный',
					width:'80',
				},
				{
					text:'Вес вопроса',
					width:'100',
				},
				{
					text:'Секунд ответа',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:142px;width:416px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:416px;height:74px;',
			height: 74,width: 416,
			columns:
			[
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Раздел',
					width:'234',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:416px;height:24px;',
			items:
			[
				{
					text:'Удалить раздел',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
			]
		},
					]
				},
				{
					title:'Макет печатной формы анкеты',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:416px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Очистить',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Заголовок:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеАнкеты',
			style: 'position:absolute;left:95px;top:57px;width:343px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Вступление:',
			style: 'position:absolute;left:8px;top:82px;width:84px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Вступление',
			style: 'position:absolute;left:95px;top:82px;width:343px;height:80px;',
		},
	]
});