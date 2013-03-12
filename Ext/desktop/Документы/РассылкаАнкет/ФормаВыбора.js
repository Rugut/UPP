Ext.define('Документы.РассылкаАнкет.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:528px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Рассылки анкет',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:512px;height:259px;',
			height: 259,width: 512,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Анкета',
					width:'120',
				},
				{
					text:'Первичная рассылка',
					width:'120',
				},
				{
					text:'Текст письма',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:528px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие12',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действия формы выбрать',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
			]
		},
	]
});