Ext.define('Документы.Опрос.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:426px;height:524px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Опрос',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:426px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'Обновить состав вопросов',
				},
					]
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:426px;height:25px;',
			items:
			[
				{
					text:'Опрос завершен',
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
			style: 'position:absolute;left:8px;top:33px;width:410px;height:52px;',
			height: 52,width: 410,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОпрашиваемоеЛицо',
			text: 'Анкетируемый:',
			style: 'position:absolute;left:0px;top:1px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОпрашиваемоеЛицо',
			style: 'position:absolute;left:114px;top:1px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТиповаяАнкета',
			text: 'Типовая анкета:',
			style: 'position:absolute;left:0px;top:26px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТиповаяАнкета',
			style: 'position:absolute;left:114px;top:26px;width:296px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:268px;top:399px;width:38px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:312px;top:399px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'Дата регистрации:',
			style: 'position:absolute;left:8px;top:399px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:122px;top:399px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Зарегистрировал:',
			style: 'position:absolute;left:8px;top:424px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:122px;top:424px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:472px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:122px;top:472px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: 'Опрос не завершен',
			style: 'position:absolute;left:30px;top:351px;width:388px;height:17px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:410px;height:258px;',
			height: 258,width: 410,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Опрос',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:258px;',
			height: 258,width: 410,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Раздел',
					width:'80',
				},
				{
					text:'Вопрос',
					width:'160',
				},
				{
					text:'Ответ',
					width:'120',
				},
			]
		},
					]
				},
				{
					title:'Тестирование',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТестирование',
			text: 'Тестирование',
			style: 'position:absolute;left:169px;top:102px;width:73px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНачатьТестирование',
			text: 'Начать тестирование',
			style: 'position:absolute;left:145px;top:137px;width:120px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:448px;width:410px;height:24px;',
			height: 24,width: 410,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРассылка',
			text: 'Рассылка:',
			style: 'position:absolute;left:0px;top:0px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Рассылка',
			style: 'position:absolute;left:114px;top:0px;width:296px;height:19px;',
		},
					]
				},
			]
		},
	]
});