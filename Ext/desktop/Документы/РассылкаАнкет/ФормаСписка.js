Ext.define('Документы.РассылкаАнкет.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:800px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Рассылки анкет',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:784px;height:389px;',
			height: 389,width: 784,
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
					width:'100',
				},
				{
					text:'Первичная рассылка',
					width:'100',
				},
				{
					text:'Текст письма',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие4',
				},
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие11',
				},
			]
		},
	]
});