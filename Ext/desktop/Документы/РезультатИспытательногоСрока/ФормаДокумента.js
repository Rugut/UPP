﻿Ext.define('Документы.РезультатИспытательногоСрока.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:699px;height:312px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Результат испытательного срока',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:375px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:461px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:571px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:201px;width:683px;height:78px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:699px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
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
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:553px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:287px;width:699px;height:25px;',
			items:
			[
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
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:375px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:461px;top:57px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: 'Кандидат:',
			style: 'position:absolute;left:8px;top:33px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:104px;top:33px;width:247px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИзменения',
			text: 'Дата изменения:',
			style: 'position:absolute;left:260px;top:104px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения',
			style: 'position:absolute;left:356px;top:104px;width:100px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прошел испытательный срок',
			style: 'position:absolute;left:8px;top:108px;width:192px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Не прошел испытательный срок',
			style: 'position:absolute;left:8px;top:132px;width:192px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Испытательный срок продлен',
			style: 'position:absolute;left:8px;top:156px;width:192px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:260px;top:132px;width:431px;height:19px;',
			height: 19,width: 431,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});